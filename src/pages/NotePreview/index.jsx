import { useState, useEffect } from "react";
import { Container, Content, PostInfo } from "./styles";
import { BiTime, BiArrowBack } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { BackLink } from "../../components/BackLink";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { TagsGroup } from "../../components/TagsGroup";
import { Rating } from "../../components/Rating";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png";

import dayjs from "dayjs";

export function NotePreview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  async function handleDelete() {
    const confirm = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (confirm) {
      await api.delete(`/movieNotes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <BackLink title="Back" icon={BiArrowBack} route="/" />
            <PageTitle
              title={data.title}
              button={{
                title: "Delete Movie",
                bgPink: false,
                onClick: handleDelete,
              }}
            >
              <Rating rating={data.rating} />
            </PageTitle>
            <PostInfo>
              <img src={avatarUrl} alt={user.name} />
              <span>{`By ${user.name} `}</span> <BiTime />
              <span>
                {" "}
                {dayjs(data.updated_at).format("DD MMMM YYYY - HH:mm")}
              </span>
            </PostInfo>
            <TagsGroup tags={data.tags} />
            <article>
              <p>{data.description}</p>
            </article>
          </Content>
        </main>
      )}
    </Container>
  );
}
