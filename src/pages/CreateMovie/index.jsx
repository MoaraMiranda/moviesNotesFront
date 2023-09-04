import { Header } from "../../components/Header";
import { BackLink } from "../../components/BackLink";

import { Container, Textarea, Fieldset } from "./styles";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Input";
import { TagsController } from "../../components/TagsController";
import { PageTitle } from "../../components/PageTitle";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <BackLink title="Back" icon={BiArrowBack} />
        <PageTitle title="New Movie" buttonTitle="Save" bgPink />
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
