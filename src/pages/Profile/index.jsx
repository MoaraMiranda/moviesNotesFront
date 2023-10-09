import { useState } from "react";
import { Container, Form, Avatar } from "./styles.js";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackLink } from "../../components/BackLink";
import { useAuth } from "../../hooks/auth.jsx";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      newPassword: passwordNew,
      currentPassword: passwordOld,
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  return (
    <Container>
      <header>
        <BackLink title="Back" icon={BiArrowBack} route="/" />
      </header>
      <Form>
        <Avatar className="logo">
          <img src={avatar} alt="User picture" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <div className="input-wrapper">
          <Input
            placeholder="Name"
            icon={FiUser}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            icon={FiMail}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Current password"
            icon={FiLock}
            type="password"
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            placeholder="New password"
            icon={FiLock}
            type="password"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <Button title="Save" onClick={handleUpdate} />
        </div>
      </Form>
    </Container>
  );
}
