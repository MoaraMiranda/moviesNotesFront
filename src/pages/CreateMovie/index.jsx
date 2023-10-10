import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { BiArrowBack } from "react-icons/bi";
import { Container, Textarea, Fieldset, Button } from "./styles";
import { Header } from "../../components/Header";
import { BackLink } from "../../components/BackLink";
import { Input } from "../../components/Input";
import { TagsController } from "../../components/TagsController";
import { PageTitle } from "../../components/PageTitle";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Please add a title to your movie.");
    }

    if (!rating) {
      return alert("Please add a rating to your movie.");
    }

    if (newTag) {
      return alert(
        "You didn't finish adding the new tag. Click + to finish adding it, or delete it, please!"
      );
    }
    await api.post("/movieNotes", {
      title,
      rating,
      description,
      tags,
    });
    alert("Movie added successfully");
    navigate(-1);
  }
  return (
    <Container>
      <Header />
      <main>
        <BackLink title="Back" icon={BiArrowBack} route={"/"} />
        <PageTitle title="New Movie" />
        <form>
          <Fieldset>
            <div className="input-wrapper">
              <Input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Your rating (from 0 to 5)"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <Textarea
              placeholder="Observations"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <legend>Tags</legend>
            <div className="tags">
              <TagsController
                $isNew
                placeholder="New Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

              {tags.map((tag, index) => (
                <TagsController
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
            </div>
            <Button onClick={handleNewMovie}>
              <button>Save your movie</button>
            </Button>
          </Fieldset>
        </form>
      </main>
    </Container>
  );
}
