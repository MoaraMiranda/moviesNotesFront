import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>MovieMemos</h1>
      <Input type="text" placeholder="Search by title" icon={FiSearch} />
      <section>
        <div>
          <h3>Moara Miranda</h3>
          <p>logout</p>
        </div>
        <img src="https://github.com/moaramiranda.png" alt="user picture" />
      </section>
    </Container>
  );
}
