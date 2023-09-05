import { Container, Button } from "./styles";

export function PageTitle({
  title,
  children,
  buttonTitle,
  icon: Icon,
  bgPink,
  route,
}) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>

      {buttonTitle && (
        <Button bgPink={bgPink} to={route}>
          {Icon && <Icon size={14} />}
          {buttonTitle}
        </Button>
      )}
    </Container>
  );
}
