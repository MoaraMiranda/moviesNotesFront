import { Container } from "./styles";

export function Button({ title, ...rest }) {
  return (
    <Container {...rest}>
      <button>{title}</button>
    </Container>
  );
}
