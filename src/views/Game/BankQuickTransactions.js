import { Fragment } from "react";
import { Button, Col, Label, Row } from "reactstrap";

export default function BankQuickTransactions({ players }) {
  return (
    <Fragment>
      <h3 className="title">Quick Transactions</h3>

      <Row>
        <Col xs="12">
          <Label>Round Transaction of 200</Label>
        </Col>

        {players.map(({ key, name }, x) => (
          <Col key={x}>
            <Button color="info" type="button" className="my-4">
              {name}
            </Button>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
