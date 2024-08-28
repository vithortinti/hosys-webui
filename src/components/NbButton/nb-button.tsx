type ButtonProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  borderSize?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  w?: string;
  h?: string;
}

function Button({ children, backgroundColor, borderSize, type, onClick, w, h }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} style={{
      backgroundColor: backgroundColor || "gray",
      width: w || "100%",
      height: h || "4rem",
      border: `${borderSize || "3px"} solid #000`,
      cursor: "pointer"
    }}>
      {children}
    </button>
  );
}

export default Button