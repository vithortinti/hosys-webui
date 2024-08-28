type InputProps = {
  type: string;
  placeholder?: string;
  fontSize?: string;
  border?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  w?: string;
  h?: string;
}

function Input({ type, placeholder, fontSize, border, onChange, w, h }: InputProps) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} style={{
      width: w,
      height: h,
      border: `${border || "3px"} solid #000`,
      borderRadius: "5px",
      fontSize: fontSize || '1rem',
      padding: "0.5rem"
    }} />
  );
}

export default Input;