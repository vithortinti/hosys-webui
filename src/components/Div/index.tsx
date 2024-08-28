type DivProps = {
  center?: boolean;
  flexColumn?: boolean;
  flexRow?: boolean;
  children: React.ReactNode;
}

function Div({ children, center, flexColumn, flexRow }: DivProps) {
  return (
    <div className={center ? "center" : ""}>
      <div className={ flexColumn ? "flex-column" : (flexRow ? "flex-row" : "") }>
        {children}
      </div>
    </div>
  )
}

export default Div;