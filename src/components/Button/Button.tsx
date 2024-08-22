import "./Button.css";
import React from "react";

type ButtonTypes = {
  title: string;
  handleOnClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ title, handleOnClick }: ButtonTypes) => {
  return (
    <button className="btn btn-netflix" onClick={handleOnClick}>
      {title}
    </button>
  );
};

export default Button;
