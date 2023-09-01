import { Container } from "./styles";

export function Section({ title, children, }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>
      <button>Delete movie</button>
    </Container>
  );
}
