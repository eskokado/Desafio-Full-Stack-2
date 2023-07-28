import React from "react";

export const BaseButton = ({
  type = "button",
  className,
  children,
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};