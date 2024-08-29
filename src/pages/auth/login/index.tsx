import { useState } from "react";
import Clock from "../../../components/Clock/clock";
import Text from "../../../components/Text/text";
import '../auth.css';
import Div from "../../../components/Div";
import AuthNbBox from "../components/AuthNbBox";
import GitHubIcon from "../components/GitHubIcon";
import AuthButton from "../components/AuthButton";
import Input from "../../../components/Input/input";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement login logic
  }

  return (
    <form className="center wh100" onSubmit={handleSubmit}>
      <div className="auth-grid">
        <AuthNbBox>
          <div className="center title-margin">
            <Text size="76pt">login</Text>
          </div>
          <div className="flex-column group">
            <Div center flexColumn>
              <Input type="text" placeholder="USERNAME" w="100%" h="4rem" fontSize="2rem" onChange={e => setUsername(e.target.value)} />
              <a href="#" className="margin-0-5">I forgot my username :(</a>
            </Div>
            <Div center flexColumn>
              <Input type="text" placeholder="PASSWORD" w="100%" h="4rem" fontSize="2rem" onChange={e => setUsername(e.target.value)} />
              <a href="#" className="margin-0-5">I forgot my password :(</a>
            </Div>
            <Div center flexColumn>
              <AuthButton>LET'S GO</AuthButton>
              <a href="/sign-up" className="margin-0-5">I don't have an account</a>
              <GitHubIcon />
            </Div>
          </div>
        </AuthNbBox>
        <div className="center flex-column group">
          <Text bold size="96pt">HOSYS</Text>
          <Text size="25pt">Your favorite intranet tools</Text>
          <Text size="25pt">
            <Clock />
          </Text>
        </div>
      </div>
    </form>
  );
}

export default LoginPage