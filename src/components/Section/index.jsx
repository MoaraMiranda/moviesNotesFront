import { Container } from "./styles";

export function Section({ title, children, icon: Icon }) {
  return (
    <Container>
      <h2>{title}</h2>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
}
