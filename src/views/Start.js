import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import * as API from "../api/apis";

import FormRenderer from "components/Form";

export default function StartPage() {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);

  const joinGame = (values) => {
    API.joinGame(values).then((res) => {
      localStorage.setItem("game", res.game);
      localStorage.setItem("name", res.name);
      navigate(0);
    });
  };

  const startGame = (values) => {
    API.createGame(values).then((res) => {
      localStorage.setItem("game", res.game);
      localStorage.setItem("name", res.name);
      navigate(0);
    });
  };

  return (
    <Container>
      <Col className="mx-auto my-5" lg="7" md="8">
        <Card className="card-login">
          <CardHeader className="p-0 m-0">
            <h1 className="px-3 pt-5">Start</h1>
          </CardHeader>

          <Row>
            <Col md={6}>
              <CardHeader className="p-0 m-0">
                <h4 className="px-3">Join a Game</h4>
              </CardHeader>

              <CardBody>
                <FormRenderer
                  onSubmit={joinGame}
                  submitLabel="Join"
                  fullWidthSubmit
                  inputs={[
                    {
                      icon: "fas fa-person",
                      label: "Your Name",
                      name: "name",
                      defaultValue: localStorage.getItem("name") || "",
                      required: true,
                      fullWidth: true,
                    },
                    {
                      icon: "fas fa-dice",
                      label: "Joining Code",
                      name: "code",
                      defaultValue: queryParameters.get("code") || "",
                      required: true,
                      fullWidth: true,
                    },
                  ]}
                />
              </CardBody>
            </Col>

            <Col md={6}>
              <CardHeader className="p-0 m-0">
                <h4 className="px-3">Start a New Game</h4>
              </CardHeader>

              <CardBody>
                <FormRenderer
                  onSubmit={startGame}
                  submitLabel="Start"
                  fullWidthSubmit
                  inputs={[
                    {
                      icon: "fas fa-person",
                      label: "Your Name",
                      name: "name",
                      defaultValue: localStorage.getItem("name") || "",
                      required: true,
                      fullWidth: true,
                    },
                    {
                      icon: "fas fa-money-bill",
                      label: "Initial Credit For Players",
                      name: "initialCredit",
                      type: "number",
                      defaultValue: 1000,
                      min: 0,
                      required: true,
                      fullWidth: true,
                    },
                    {
                      icon: "fas fa-coins",
                      label: "Bonus of Passing 'Start Point'",
                      name: "roundBonus",
                      type: "number",
                      defaultValue: 200,
                      min: 0,
                      required: true,
                      fullWidth: true,
                    },
                  ]}
                />
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    </Container>
  );
}
