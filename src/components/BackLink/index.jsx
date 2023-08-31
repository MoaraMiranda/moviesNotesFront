import { Container } from "./styles";

export function BackLink({ icon: Icon }) {
  return (
    <Container>
      <a href="/">
        <Icon size={16} />
        Back
      </a>
    </Container>
  );
}
