import { Button, ButtonGroup, Container } from "reactstrap";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";

export default function WelcomeSection({ players, credit }) {
  const navigate = useNavigate();

  const code = localStorage.getItem("game");
  const name = localStorage.getItem("name");
  const url = window.location.href;

  return (
    <Container className="p-5 my-5">
      <h2 className="text-light">
        {name}, Your credit now is{" "}
        <span className="title text-white">{credit}</span>
      </h2>

      <h3>
        Game Code: {code}
        <ButtonGroup className="mx-3">
          <Button
            color="info"
            type="button"
            size="sm"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            <i className="fas fa-copy mr-1" />
            Copy Code
          </Button>

          <Button
            color="default"
            type="button"
            size="sm"
            onClick={() =>
              window.open(
                `https://wa.me/?text=Join%20Me%20On%20Monopoly%20Credit%20Sheet%20With%20Code:%20${code}%20@%20${url}?code=${code}`
              )
            }
          >
            <i className="fab fa-whatsapp mr-1" />
            Share On Wasap
          </Button>
        </ButtonGroup>
      </h3>

      <h4>
        Players List:{" "}
        {players.map(({ name, status }, i) => (
          <span
            className={classnames("mr-3", {
              "text-success": status == "Active",
              "text-danger": status != "Active",
            })}
            key={i}
          >
            {name}
          </span>
        ))}
      </h4>

      {localStorage.getItem("game") && (
        <Button
          color="danger"
          size="sm"
          onClick={() => {
            localStorage.removeItem("game");
            navigate(0);
          }}
        >
          Exit Game
        </Button>
      )}
    </Container>
  );
}
