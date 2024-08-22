import "./InputText.css";

type InputTextLabel = {
  label: string;
  value?:string;
  setValueChange?:(text:string)=>void
};

const InputText = ({ label,value ,setValueChange}: InputTextLabel) => {
  return (
    <div className="input-text-container">
      <input className="input-text pt-4 pb-2 px-3" value={value} onChange={(e)=>setValueChange &&setValueChange(e.target.value)}/>
      <span className="label">{label}</span>
    </div>
  );
};

export default InputText;
