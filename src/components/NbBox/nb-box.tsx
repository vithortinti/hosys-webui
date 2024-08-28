type NbBoxProps = {
  children: React.ReactNode;
  backgroundColor: string;
  w?: string;
  h?: string;
  center?: boolean;
  direction?: "row" | "column";
  shadowDistance?: string;
  shadowColor?: string;
}

function NbBox({ 
  children, 
  backgroundColor, 
  w, 
  h, 
  center,
  direction,
  shadowDistance,
  shadowColor
  }: NbBoxProps
) {
  const sDistance = shadowDistance || "15px";

  return (
    <div className={center ? "center" : ""} style={{ 
      backgroundColor: backgroundColor,
      boxShadow: `${sDistance} ${sDistance} 0px ${shadowColor || "rgba(0, 0, 0, 1)"}`,
      width: w,
      height: h,
      flexDirection: direction || "row"
    }}>
      {children}
    </div>
  );
}

export default NbBox