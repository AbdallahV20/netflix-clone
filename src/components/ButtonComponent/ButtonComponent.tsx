import React from 'react';
import './ButtonComponent.css';

interface ButtonComponentProps {
  text?: string; 
  type: 'button' | 'select';
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, type }) => {
  return (
    <>
      {type === 'button' ? (
        <button className="btn-custom py-1 px-2 mx-2 px-3">{text}</button>
      ) : (
        <select className="select-custom py-1 px-4 mx-4">
          <option value="English">English</option>
          <option value="العربية">العربية</option>
        </select>
      )}
    </>
  );
};

export default ButtonComponent;
