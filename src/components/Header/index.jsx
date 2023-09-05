import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Profile, Brand } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Brand to="/">
        <h1>MovieMemos</h1>
      </Brand>
      <Input type="text" placeholder="Search by title" icon={FiSearch} />
      <Profile>
        <Link to="#">
          <h3>Moara Miranda</h3>
          <p>logout</p>
        </Link>
        <Link to="/profile">
          <img src="https://github.com/moaramiranda.png" alt="user picture" />
        </Link>
      </Profile>
    </Container>
  );
}
