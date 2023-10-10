import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { PageTitle } from "../../components/PageTitle";
import { Container, Content } from "./styles";
import { FaPlus } from "react-icons/fa";
import { api } from "../../services/api";
import { useSearchParams } from "react-router-dom";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [params] = useSearchParams();
  const title = params.get("title") || "";

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movieNotes?title=${title}`);
      setNotes(response.data);
    }

    fetchMovies();
  }, [title]);
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
          {notes.map((note) => (
            <MovieNote
              key={String(note.id)}
              title={note.title}
              rating={note.rating}
              description={note.description}
              tags={note.tags}
              route="/preview/2"
            />
          ))}
        </Content>
      </main>
    </Container>
  );
}
