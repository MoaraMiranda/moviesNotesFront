import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Profile, Brand } from "./styles";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <Brand to="/">
        <h1>MovieMemos</h1>
      </Brand>
      <Input type="text" placeholder="Search by title" icon={FiSearch} />
      <Profile>
        <Link to="#" onClick={signOut}>
          <h3>{user.name}</h3>
          <p>logout</p>
        </Link>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
