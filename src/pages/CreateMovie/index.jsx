import { BiArrowBack } from "react-icons/bi";
import { Container, Textarea, Fieldset, Button } from "./styles";
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
        <PageTitle title="New Movie" />
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
              <TagsController $isNew placeholder="New Tag" />
            </div>
            <Button>
              <button>Save your movie</button>
            </Button>
          </Fieldset>
        </form>
      </main>
    </Container>
  );
}
