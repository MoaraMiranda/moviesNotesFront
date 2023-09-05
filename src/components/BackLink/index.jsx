import { Container } from "./styles";
import { Link } from "react-router-dom";

export function BackLink({ title, icon: Icon, route }) {
  return (
    <Container>
      <Link to={route}>
        <Icon size={16} />
        {title}
      </Link>
    </Container>
  );
}
