import { Container, Form, Background } from "./styles.js";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/index.jsx";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div className="logo">
          <h1>MovieMemos</h1>
          <p>Take notes from your favorite movies</p>
        </div>
        <h2>Sing in here</h2>
        <div className="input-wrapper">
          <Input placeholder="Email" icon={FiMail} type="text" />
          <Input placeholder="Password" icon={FiLock} type="password" />
          <Button title="Login" />
        </div>
        <Link to="/register">Create your account</Link>
      </Form>
      <Background />
    </Container>
  );
}
