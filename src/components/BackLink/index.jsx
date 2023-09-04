import { Container } from "./styles";

export function BackLink({ title, icon: Icon }) {
  return (
    <Container>
      <a href="/">
        <Icon size={16} />
        {title}
      </a>
    </Container>
  );
}
