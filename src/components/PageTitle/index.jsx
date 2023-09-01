import { Container } from "./styles";

export function PageTitle({ title, children, buttonTitle, icon: Icon }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>
      <button>
        {Icon && <Icon size={14} />}
        {buttonTitle}
      </button>
    </Container>
  );
}
