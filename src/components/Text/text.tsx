type TextProps = {
  children: React.ReactNode;
  size?: string;
  bold?: boolean;
}

function Text({ children, size, bold }: TextProps) {
  return (
    <p style={{ 
      fontSize: size || "16px",
      fontWeight: bold ? "bold" : "normal"
     }}>
      {children}
    </p>
  );
}

export default Text