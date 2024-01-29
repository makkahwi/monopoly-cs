import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

export default function Error400() {
  const navigate = useNavigate();

  const wrapper = useRef(null);

  return (
    <div className="wrapper" ref={wrapper}>
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h1 className="title">404</h1>
            <h2 className="description">Page not found :(</h2>
            <h4 className="description">Ooooups! Looks like you got lost.</h4>

            <Button color="default" onClick={() => navigate("/")}>
              Back To Landing
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
