import { Container } from "./styles";

export function PageTitle({
  title,
  children,
  buttonTitle,
  icon: Icon,
  bgPink,
}) {
  return (
    <Container bgPink={bgPink}>
      <h2>{title}</h2>
      <div>{children}</div>
      <button>
        {Icon && <Icon size={14} />}
        {buttonTitle}
      </button>
    </Container>
  );
}
