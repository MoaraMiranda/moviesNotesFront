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
        <PageTitle
          title="My Movies"
          buttonTitle="Add Movie"
          icon={FaPlus}
          bgPink
          route="/new"
        />
        <Content>
          <MovieNote title="Interestelar" rating={3} route="/" />
          <MovieNote title="Titanic" rating={4} route="/" />
          <MovieNote title="Beauty and the Beast" rating={5} route="/" />
        </Content>
      </main>
    </Container>
  );
}
