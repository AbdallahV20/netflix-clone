import "./InputText.css";

type InputTextLabel = {
  label: string;
};

const InputText = ({ label }: InputTextLabel) => {
  return (
    <div className="input-text-container">
      <input className="input-text pt-4 pb-2 px-3" />
      <span className="label">{label}</span>
    </div>
  );
};

export default InputText;
