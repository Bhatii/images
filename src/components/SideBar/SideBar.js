import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HISTORY_CHECK,
  ROTATE_LEFT,
  ROTATE_RIGHT,
  SCALE_DOWN,
  SCALE_UP,
} from "../../actions";
import Button from "../Button/Button";


const SideBar = () => {
  const { scale, rotations, history, isEditing } = useSelector(
    ({ state }) => state
  );
  const isVertical = Math.abs(rotations % 2) === 1;

  const dispatch = useDispatch();
  const onButtonClick = (type) => !isEditing && dispatch({ type });
  const onHistoryCheck = (type) => {
    if (isEditing) return;
    const prevStep =
      type === SCALE_UP
        ? SCALE_DOWN
        : type === SCALE_DOWN
        ? SCALE_UP
        : type === ROTATE_LEFT
        ? ROTATE_RIGHT
        : type === ROTATE_RIGHT
        ? ROTATE_LEFT
        : null;

    dispatch({ type: prevStep });
    dispatch({ type: HISTORY_CHECK, history });
  };
  return (
    <div className="SideBar">
      <Button
        label="zoom_in"
        onClick={() => onButtonClick(SCALE_UP)}
        disabled={(isVertical && scale > 2) || scale > 9 || isEditing}
      />
      <Button
        label="zoom_out"
        onClick={() => onButtonClick(SCALE_DOWN)}
        disabled={(isVertical && scale < -3) || scale < -5 || isEditing}
      />
      <Button
        label="rotate_right"
        onClick={() => onButtonClick(ROTATE_LEFT)}
        disabled={isEditing}
      />
      <Button
        label="rotate_left"
        onClick={() => onButtonClick(ROTATE_RIGHT)}
        disabled={isEditing}
      />
      <Button
        label="history"
        onClick={() => onHistoryCheck(history.pop())}
        disabled={isEditing || !history.length}
      />
    </div>
  );
};

export default SideBar;
