import React from "react";
import { ButtonProps } from "../../types/component.types";

interface ExtendedButtonProps extends Partial<ButtonProps> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ExtendedButtonProps> = ({
  splClass,
  btnName,
  handler,
  onClick,
  type,
  children,
}) => {
  const clickHandler = handler || onClick; 
  if (type === "outline") {
    return (
      <button
        data-testid="button"
        className={`cursor-pointer rounded-[8px] p-2 ${splClass}`}
        onClick={clickHandler}
        type="submit"
      >
        {btnName ? btnName : children}
      </button>
    );
  }

  return (
    <button
      data-testid="button"
      className={`cursor-pointer bg-[#2BBC7C] hover:bg-[#0C804D] rounded-[8px] text-white p-2 ${splClass}`}
      onClick={clickHandler}
      type="submit"
    >
      {btnName ? btnName : children}
    </button>
  );
};

export default React.memo(Button);
