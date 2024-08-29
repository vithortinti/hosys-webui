import NbBox from "../../../../components/NbBox/nb-box";

type AuthNbBoxProps = {
  children: React.ReactNode;
}

function AuthNbBox({ children }: AuthNbBoxProps) {
  return (
    <NbBox backgroundColor="#FF7A5C" direction="column" w="35rem" h="50rem">
      {children}
    </NbBox>
  )
}

export default AuthNbBox;