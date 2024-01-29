import { Button, ButtonGroup, Container } from "reactstrap";

export default function WelcomeSection({ players, credit }) {
  const code = localStorage.getItem("game");
  const name = localStorage.getItem("name");
  const url = "https://monopoly-cs.vercel.app";

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
            color="primary"
            type="button"
            size="sm"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            Copy Code
          </Button>

          <Button
            color="success"
            type="button"
            size="sm"
            onClick={() =>
              window.open(
                `https://wa.me/?text=Join%20Me%20On%20Monopoly%20Calculator%20With%20Code:%20${code}%20@%20${url}?code=${code}`
              )
            }
          >
            Share On Wasap
          </Button>
        </ButtonGroup>
      </h3>

      <h4>Players List: {players.map(({ name }) => name).join(", ")}</h4>
    </Container>
  );
}
