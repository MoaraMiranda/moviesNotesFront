import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Rating } from "../Rating";
import { TagsGroup } from "../TagsGroup";

export function MovieNote({
  title,
  rating,
  description,
  tags,
  route,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Link to={route}>
        <div>
          <h2>{title}</h2>
          <Rating rating={rating} />
        </div>
        <p>{description}</p>
        <TagsGroup tags={tags} />
      </Link>
    </Container>
  );
}
