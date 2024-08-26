import React, { useState } from "react";
import "./InputText.css";

type InputTextLabel = {
  label: string;
  value?: string;
  setValueChange?: (text: string) => void;
};

const InputText = ({ label, value, setValueChange }: InputTextLabel) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="input-text-container">
      <input
        className="input-text pt-4 pb-2 px-3"
        value={value}
        onChange={(e) => setValueChange && setValueChange(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <span
        className="label"
        style={{
          top: isFocus || value ? 7 : 16,
          fontSize: isFocus || value ? 12 : 15,
        }}
      >
        {label}
      </span>
    </div>
  );
};
export default InputText;
