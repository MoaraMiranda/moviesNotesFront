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
          button={{
            title: "Add Movie",
            Icon: FaPlus,
            bgPink: true,
            route: "/new",
          }}
        />
        <Content>
          <MovieNote title="Interestelar" rating={3} route="/preview/2" />
          <MovieNote title="Titanic" rating={4} route="/preview/3" />
          <MovieNote
            title="Beauty and the Beast"
            rating={5}
            route="/preview/4"
          />
        </Content>
      </main>
    </Container>
  );
}
