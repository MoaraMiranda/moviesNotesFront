import { Container, Button } from "./styles";

export function PageTitle({ title, children, button }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>

      {button && (
        <Button
          $bgPink={button.bgPink}
          to={button.route}
          onClick={button.onClick}
        >
          {button.Icon && <button.Icon size={14} />}
          {button.title}
        </Button>
      )}
    </Container>
  );
}
