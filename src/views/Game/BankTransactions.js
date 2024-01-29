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

export default function BankTransactions({
  players,
  values,
  setValues,
  submit,
}) {
  const bankNotes = ["Chance / X", "Mortgage"];

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Send Credit From Bank To User</h2>

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

      <h3 className="title">Custom Transactions</h3>
      <Form>
        <Row>
          <Col md="4" xs="6">
            <Label>Recipient</Label>

            {players.map(({ key, name }, x) => (
              <FormGroup check className="form-check-radio" key={x}>
                <Label check>
                  <Input
                    name="bankTransactionRecipient"
                    type="radio"
                    checked={values.recipient == key}
                    onClick={() =>
                      setValues((current) => ({
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
            <Label>Amount</Label>

            <FormGroup>
              <Input
                placeholder="Amount"
                type="number"
                value={values.amount}
                onChange={(e) =>
                  setValues((current) => ({
                    ...current,
                    amount: e.target.value,
                  }))
                }
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <Label>Note</Label>

            <UncontrolledDropdown>
              <DropdownToggle caret className="btn-block" color="info">
                {values.note || "Note"}
              </DropdownToggle>

              <DropdownMenu>
                {bankNotes.map((note, x) => (
                  <DropdownItem
                    onClick={() =>
                      setValues((current) => ({
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

        <Button color="info" type="button" className="my-4" onClick={submit}>
          Submit Transaction
        </Button>
      </Form>
    </Container>
  );
}
