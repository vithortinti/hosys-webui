type DivProps = {
  center?: boolean;
  flexColumn?: boolean;
  flexRow?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Div({ children, center, flexColumn, flexRow, className }: DivProps) {
  return (
    <div className={center ? "center " + className : className}>
      <div className={ flexColumn ? "flex-column " + className : (flexRow ? "flex-row " + className : className) }>
        {children}
      </div>
    </div>
  )
}

export default Div;