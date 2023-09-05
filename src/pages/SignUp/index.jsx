import { Container, Form, Background } from "./styles.js";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackLink } from "../../components/BackLink";

export function SignUp() {
  return (
    <Container>
      <Form>
        <div className="logo">
          <h1>MovieMemos</h1>
          <p>Take notes from your favorite movies</p>
        </div>
        <h2>Create your account</h2>
        <div className="input-wrapper">
          <Input placeholder="Name" icon={FiUser} type="text" />
          <Input placeholder="Email" icon={FiMail} type="text" />
          <Input placeholder="Password" icon={FiLock} type="password" />
          <Button title="Register" />
        </div>
        <BackLink title="Back to Login" icon={BiArrowBack} route={"/"} />
      </Form>
      <Background />
    </Container>
  );
}
