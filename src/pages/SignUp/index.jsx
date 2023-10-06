import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Background } from "./styles.js";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackLink } from "../../components/BackLink";
import { api } from "../../services/api.js";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Please fill out all fields.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User successfully registered");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          console.log("entrou aqui", error.response.data);
          alert(error.response.data.message);
        } else {
          alert("It was not possible register user");
        }
      });
  }
  return (
    <Container>
      <Background />

      <Form>
        <div className="logo">
          <h1>MovieMemos</h1>
          <p>Take notes from your favorite movies</p>
        </div>
        <h2>Create your account</h2>
        <div className="input-wrapper">
          <Input
            placeholder="Name"
            icon={FiUser}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button title="Register" onClick={handleSignUp} />
        </div>
        <BackLink title="Back to Login" icon={BiArrowBack} route={"/"} />
      </Form>
    </Container>
  );
}
