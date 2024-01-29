import {
  Button,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

export default function UserTransactions({
  players,
  userTransactionValues,
  setUserTransactionValues,
  submitUserTransaction,
}) {
  const userNotes = ["Rent", "Buy", "Chance / X", "Tax"];

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Send Credit To User From Yours</h2>

      <Form>
        <Row>
          <Col md="4" xs="6">
            <p className="category">Recipient</p>

            {players.map(({ key, name }, x) => (
              <FormGroup check className="form-check-radio" key={x}>
                <Label check>
                  <Input
                    name="userTransactionRecipient"
                    type="radio"
                    checked={userTransactionValues.recipient == key}
                    onClick={() =>
                      setUserTransactionValues((current) => ({
                        ...current,
                        recipient: key,
                      }))
                    }
                  />
                  <span className="form-check-sign" />
                  {name}
                </Label>
              </FormGroup>
            ))}
          </Col>

          <Col md="4" xs="6">
            <p className="category">Amount</p>

            <FormGroup>
              <Input
                placeholder="Amount"
                type="number"
                value={userTransactionValues.amount}
                onChange={(e) =>
                  setUserTransactionValues((current) => ({
                    ...current,
                    amount: e.target.value,
                  }))
                }
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <p className="category">Note</p>

            <UncontrolledDropdown>
              <DropdownToggle caret className="btn-block" color="primary">
                {userTransactionValues.note || "Note"}
              </DropdownToggle>

              <DropdownMenu>
                {userNotes.map((note, x) => (
                  <DropdownItem
                    href="#pablo"
                    onClick={() =>
                      setUserTransactionValues((current) => ({
                        ...current,
                        note: note,
                      }))
                    }
                    key={x}
                  >
                    {note}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>

        <Button
          color="primary"
          type="button"
          className="my-4"
          onClick={submitUserTransaction}
        >
          Submit Transaction
        </Button>
      </Form>
    </Container>
  );
}
