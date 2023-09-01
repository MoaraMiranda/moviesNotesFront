import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { PageTitle } from "../../components/PageTitle";
import { Container, Content } from "./styles";
import { FaPlus } from "react-icons/fa";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <PageTitle title="My Movies" buttonTitle="Add Movie" icon={FaPlus} />
        <Content>
          <MovieNote title="Interestelar" rating={3} />
          <MovieNote title="Titanic" rating={4} />
          <MovieNote title="Beauty and the Beast" rating={5} />
        </Content>
      </main>
    </Container>
  );
}
