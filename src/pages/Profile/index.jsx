import { Container, Form, Avatar } from "./styles.js";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackLink } from "../../components/BackLink";

export function Profile() {
  return (
    <Container>
      <header>
        <BackLink title="Back" icon={BiArrowBack} route="/"/>
      </header>
      <Form>
        <Avatar className="logo">
          <img src="https://github.com/moaramiranda.png" alt="User picture" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <div className="input-wrapper">
          <Input placeholder="Name" icon={FiUser} type="text" />
          <Input placeholder="Email" icon={FiMail} type="text" />
          <Input placeholder="Current password" icon={FiLock} type="password" />
          <Input placeholder="New password" icon={FiLock} type="password" />
          <Button title="Save" />
        </div>
      </Form>
    </Container>
  );
}
