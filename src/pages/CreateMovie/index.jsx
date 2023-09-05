import { BiArrowBack } from "react-icons/bi";
import { Container, Textarea, Fieldset } from "./styles";
import { Header } from "../../components/Header";
import { BackLink } from "../../components/BackLink";
import { Input } from "../../components/Input";
import { TagsController } from "../../components/TagsController";
import { PageTitle } from "../../components/PageTitle";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <BackLink title="Back" icon={BiArrowBack} route={"/"} />
        {/* todo - arrumar css botao */}
        <PageTitle title="New Movie" buttonTitle="Save" bgPink route="" />
        <form>
          <Fieldset>
            <div className="input-wrapper">
              <Input placeholder="Title" />
              <Input placeholder="Your rating (from 0 to 5)" />
            </div>
            <Textarea placeholder="Observations" />
          </Fieldset>
          <Fieldset>
            <legend>Tags</legend>
            <div className="tags">
              <TagsController value="Romance" />
              <TagsController isNew placeholder="New Tag" />
            </div>
          </Fieldset>
        </form>
      </main>
    </Container>
  );
}
