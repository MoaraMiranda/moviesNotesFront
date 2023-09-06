import { Container } from "./styles";
import notFoundImg from "../../assets/notFoundImg.png";

export function AppError() {
  return (
    <Container>
      <section>
        <h1>Oops!</h1>
        <img src={notFoundImg} alt="not found image" />
        <p>404 - Page not found</p>
      </section>
    </Container>
  );
}
