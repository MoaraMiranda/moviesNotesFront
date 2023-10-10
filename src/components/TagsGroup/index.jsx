import { Container } from "./styles";
import { Tag } from "../Tag";

export function TagsGroup({ tags }) {
  return (
    <Container>
      {tags.map((tag) => (
        <Tag key={String(tag.id)} title={tag.name} />
      ))}
    </Container>
  );
}
