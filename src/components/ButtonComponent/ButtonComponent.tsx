import React from 'react';
import './ButtonComponent.css';

interface ButtonComponentProps {
  text?: string;
  type: 'button' | 'select';
  className?: string;
  svgIcon?: JSX.Element; // Prop لإضافة الرمز SVG
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, type, className, svgIcon }) => {
  return (
    <>
      {type === 'button' ? (
        <button className={`btn-custom py-1 px-2 mx-2 px-3 ${className}`}>
          {text}
          {svgIcon && <span className="btn-icon">{svgIcon}</span>}
        </button>
      ) : (
        <select className={`select-custom py-1 px-4 mx-4 ${className}`}>
          <option value="English">English</option>
          <option value="العربية">العربية</option>
        </select>
      )}
    </>
  );
};

export default ButtonComponent;
