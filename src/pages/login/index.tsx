import { useState } from "react";
import Clock from "../../components/Clock/clock";
import Input from "../../components/Input/input";
import NbBox from "../../components/NbBox/nb-box";
import Button from "../../components/NbButton/nb-button";
import Text from "../../components/Text/text";
import './login.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement login logic
  }

  return (
    <form className="center wh100" onSubmit={handleSubmit}>
      <div className="login-grid">
        <NbBox backgroundColor="#FF7A5C" direction="column" w="35rem" h="50rem">
          <div className="center title-margin">
            <Text size="76pt">login</Text>
          </div>
          <div className="flex-column group">
            <div className="center">
              <div className="flex-column">
                <Input type="text" placeholder="USERNAME" w="100%" h="4rem" fontSize="2rem" onChange={e => setUsername(e.target.value)} />
                <a href="#" className="margin-0-5">
                  <Text size="14pt">I forgot my username :(</Text>
                </a>
              </div>
            </div>
            <div className="center">
              <div className="flex-column">
                <Input type="password" placeholder="PASSWORD" w="100%" h="4rem" fontSize="2rem" onChange={e => setPassword(e.target.value)} />
                <a href="#" className="margin-0-5">
                  <Text size="14pt">I forgot my password :(</Text>
                </a>
              </div>
            </div>
            <div className="center">
              <div className="flex-column">
                <div className="center flex-column">
                  <Button type="submit" backgroundColor="#93FF89" w="15rem" h="5rem">
                    <Text size="26pt">LET'S GO</Text>
                  </Button>
                  <a href="#" className="margin-0-5">I don't have an account</a>
                </div>
                <div className="center">
                  <a href="https://github.com/vithortinti/hosys-webui" target="_blank">
                    <img src="/github.svg" alt="github" width="48px" className="filter-white margin-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </NbBox>
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