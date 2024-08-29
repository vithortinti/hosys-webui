import Button from "../../../../components/NbButton/nb-button";
import Text from "../../../../components/Text/text";

type AuthButtonProps = {
  children: React.ReactNode;
}

const AuthButton = ({ children }: AuthButtonProps) => (
  <div className="center flex-column">
    <Button type="submit" backgroundColor="#93FF89" w="15rem" h="5rem">
      <Text size="26pt">{children}</Text>
    </Button>
  </div>
);

export default AuthButton;