import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TITLE, DRAGGING, EDIT } from "../../actions";
import islandPic from "../../assets/island.jpg";

const Body = () => {
  const { isEditing, rotations, scale, title, x, y} = useSelector(({ state }) => state);

  const dispatch = useDispatch();
  const onInputChange = (payload) => dispatch({ type: ADD_TITLE, payload });

  const divRef = useRef(null);
  const inputRef = useRef(null);

  const rotate = rotations * 90;
  const zoom = 1 + scale / 10;
  const styles = {
    transform: `rotate(${rotate}deg) scale(${zoom})`,
    backgroundImage: `url(${islandPic})`,
    backgroundPosition: "center",
    backgroundSize: "1000px 500px",
    backgroundAttachment: "fixed",
  };

  const onDragOver = ($event) => {
    $event.preventDefault();
    const divRect = divRef.current.getBoundingClientRect();
    const inputRect = inputRef.current.getBoundingClientRect();
    dispatch({type: DRAGGING, payload: {x: $event.clientX - divRect.left - inputRect.width / 2, y: $event.clientY - divRect.top - inputRect.height / 2}});
  }

  const onTextClick = async ($event, status) => {
    await dispatch({type: EDIT});
    inputRef.current.focus();
  }
  const onBlur = () => title && dispatch({type: EDIT});

  useEffect(() => {
    inputRef && inputRef.current.focus();
  }, [])

  const top = `${y}px`;
  const left = `${x}px`;
  return (
    <div className="Body-container">
      <div className="Body-container">
        <div
          className="image-container"
          style={styles}
          ref={divRef}
          onDragOver={($event) => onDragOver($event)}
        >
          {isEditing ? (<input
            ref={inputRef}
            style={{top, left}}
            placeholder="Please fill this first..."
            className="input-group-text draggable"
            onChange={({ target: { value } }) => onInputChange(value)}
            value={title || ""}
            draggable
            onBlur={() => onBlur()}
          />)
        : (<p onClick={() => {onTextClick()}}>{title || ''}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Body;
