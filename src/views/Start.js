import classnames from "classnames";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";

export default function StartPage() {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);

  const [focuses, setFocuses] = useState({});
  const [values, setValues] = useState({
    playerName: localStorage.getItem("name") || "",
    gameCode: queryParameters.get("code") || "",
    initialCredit: 1000,
    roundBonus: 200,
  });

  const joinGame = (e) => {
    e.preventDefault();
    console.log("Joining a game");
    localStorage.setItem("game", "MYR123");
    localStorage.setItem("name", "Suhaib");
    navigate(0);
  };

  const startGame = (e) => {
    e.preventDefault();
    console.log("Starting a game");
    localStorage.setItem("game", "SAR321");
    localStorage.setItem("name", "Suhaib");
    navigate(0);
  };

  return (
    <Container>
      <Col className="mx-auto" lg="5" md="8">
        <Card className="card-login">
          <Form action="" className="form" method="">
            <CardHeader className="p-0 m-0">
              <h1 className="px-3 pt-5">Start</h1>
            </CardHeader>

            <CardBody>
              <Label>Your Name</Label>
              <InputGroup
                className={classnames("input-lg", {
                  "input-group-focus": focuses.playerName,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-single-02" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Your Name..."
                  type="text"
                  value={values.playerName}
                  onChange={(e) =>
                    setValues((current) => ({
                      ...current,
                      playerName: e.target.value,
                    }))
                  }
                  onFocus={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      playerName: true,
                    }))
                  }
                  onBlur={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      playerName: false,
                    }))
                  }
                />
              </InputGroup>
            </CardBody>

            <CardBody>
              <CardTitle tag="h4">Join a Game</CardTitle>

              <Label>Joining Code</Label>
              <InputGroup
                className={classnames("input-lg", {
                  "input-group-focus": focuses.gameCode,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-link-72" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Joining Code..."
                  type="text"
                  value={values.gameCode}
                  onChange={(e) =>
                    setValues((current) => ({
                      ...current,
                      gameCode: e.target.value,
                    }))
                  }
                  onFocus={(e) =>
                    setFocuses((current) => ({ ...current, gameCode: true }))
                  }
                  onBlur={(e) =>
                    setFocuses((current) => ({ ...current, gameCode: false }))
                  }
                />
              </InputGroup>

              <Button
                block
                className="btn-round"
                color="primary"
                onClick={joinGame}
              >
                Join
              </Button>
            </CardBody>

            <CardBody>
              <CardTitle tag="h4">Start a New Game</CardTitle>

              <Label>Initial Credit For Players</Label>

              <InputGroup
                className={classnames("input-lg", {
                  "input-group-focus": focuses.initialCredit,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-money-coins" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Initial Credit For Players..."
                  type="number"
                  min={0}
                  value={values.initialCredit}
                  onChange={(e) =>
                    setValues((current) => ({
                      ...current,
                      initialCredit: e.target.value,
                    }))
                  }
                  onFocus={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      initialCredit: true,
                    }))
                  }
                  onBlur={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      initialCredit: false,
                    }))
                  }
                />
              </InputGroup>

              <Label>Bonus of Passing "Start Point"</Label>
              <InputGroup
                className={classnames("input-lg", {
                  "input-group-focus": focuses.roundBonus,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-coins" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Bonus of Passing 'Start Point'..."
                  type="number"
                  min={0}
                  value={values.roundBonus}
                  onChange={(e) =>
                    setValues((current) => ({
                      ...current,
                      roundBonus: e.target.value,
                    }))
                  }
                  onFocus={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      roundBonus: true,
                    }))
                  }
                  onBlur={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      roundBonus: false,
                    }))
                  }
                />
              </InputGroup>

              <Button
                block
                className="btn-round"
                color="primary"
                onClick={startGame}
              >
                Start
              </Button>
            </CardBody>

            {/* <div className="pull-right mr-3 mb-3">
                  <h6>
                    <a
                      className="link footer-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Need Help?
                    </a>
                  </h6>
                </div> */}
          </Form>
        </Card>
      </Col>
    </Container>
  );
}
