import { Container } from "./styles";
import { BiStar, BiSolidStar } from "react-icons/bi";

export function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Container>
      {stars.map((star) =>
        star <= rating ? <BiSolidStar key={star} /> : <BiStar key={star} />
      )}
    </Container>
  );
}
