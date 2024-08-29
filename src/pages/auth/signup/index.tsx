import AuthNbBox from "../components/AuthNbBox";
import Text from "../../../components/Text/text";
import Div from "../../../components/Div";
import AuthButton from "../components/AuthButton";
import Clock from "../../../components/Clock/clock";
import { useState } from "react";
import '../auth.css';
import Input from "../../../components/Input/input";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement signup logic
  }

  return (
    <form className="center wh100">
      <div className="auth-grid">
        <div className="center flex-column group">
          <Text bold size="96pt">HOSYS</Text>
          <Text size="25pt">Your favorite intranet tools</Text>
          <Text size="25pt">
            <Clock />
          </Text>
          <a href="/login" className="margin-0-5">GO BACK TO LOGIN</a>
        </div>
        <AuthNbBox>
          <div className="center margin-2">
            <Text size="76pt">signup</Text>
          </div>
          <div className="flex-column group">
            <Div center flexColumn>
              <Input type="text" placeholder="FIRST NAME" w="100%" h="4rem" fontSize="2rem" onChange={e => setFirstName(e.target.value)} />
            </Div>
            <Div center flexColumn>
              <Input type="text" placeholder="LAST NAME" w="100%" h="4rem" fontSize="2rem" onChange={e => setLastName(e.target.value)} />
            </Div>
            <Div center flexColumn>
              <Input type="text" placeholder="USERNAME" w="100%" h="4rem" fontSize="2rem" onChange={e => setUsername(e.target.value)} />
            </Div>
            <Div center flexColumn>
              <Input type="password" placeholder="PASSWORD" w="100%" h="4rem" fontSize="2rem" onChange={e => setPassword(e.target.value)} />
            </Div>
            <Div center flexColumn>
              <Input type="password" placeholder="CONFIRM PASSWORD" w="100%" h="4rem" fontSize="2rem" onChange={e => setConfirmPassword(e.target.value)} />
            </Div>
            <Div center flexColumn>
              <AuthButton>CREATE IT</AuthButton>
            </Div>
          </div>
        </AuthNbBox>
      </div>
    </form>
  );
}

export default SignUpPage;