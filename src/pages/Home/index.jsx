import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Container, Content,  } from "./styles";
import { FaPlus } from "react-icons/fa";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <PageTitle
            title="My Movies"
            buttonTitle="Add Movie"
            icon={FaPlus}
          ></PageTitle>
        </Content>
      </main>
    </Container>
  );
}
