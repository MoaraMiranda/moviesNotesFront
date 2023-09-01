import { Container } from "./styles";
import { Tag } from "../Tag";

export function TagsGroup() {
  return (
    <Container>
      <Tag title="Drama" />
      <Tag title="Family" />
      <Tag title="Romance" />
      <Tag title="Comedy" />
    </Container>
  );
}
