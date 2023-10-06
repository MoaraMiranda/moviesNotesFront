import { useState } from "react";
import { Container, Form, Background } from "./styles.js";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/index.jsx";


export function SignIn() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password})
  }
  return (
    <Container>
      <Form>
        <div className="logo">
          <h1>MovieMemos</h1>
          <p>Take notes from your favorite movies</p>
        </div>
        <h2>Sign in here</h2>
        <div className="input-wrapper">
          <Input
            placeholder="Email"
            icon={FiMail}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            icon={FiLock}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Login" onClick={handleSignIn}/>
        </div>
        <Link to="/register">Create your account</Link>
      </Form>
      <Background />
    </Container>
  );
}
