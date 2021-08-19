import clsx from "clsx";
import React from "react";


const Button = ({ appearance, label, disabled, style, onClick }) => {
  const buttonAppearance = `btn-${appearance}`;
  const classes = clsx("btn pt-2 m-1", {
    [buttonAppearance]: true,
    "pe-none": disabled,
    disabled,
  });
  return (
    <div>
      <button className={classes} style={style} onClick={onClick}>
        <div className="Select-arrow material-icons">{label}</div>
      </button>
    </div>
  );
};

Button.defaultProps = {
  appearance: "primary",
};

export default Button;
