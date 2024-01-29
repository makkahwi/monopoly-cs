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
  bankTransactionValues,
  setBankTransactionValues,
  submitBankTransaction,
}) {
  const bankNotes = [
    // "Round",
    "Chance / X",
    "Refund",
    "Mortgage",
  ];

  return (
    <Container className="p-5 my-5">
      <h2 className="title">Bank Transaction</h2>

      <h3 className="title">Quick Transactions</h3>

      <Row>
        <Col xs="12">
          <h4 className="title">Round Transaction of 200</h4>
        </Col>

        {players.map(({ key, name }, x) => (
          <Col key={x}>
            <Button color="primary" type="button" className="my-4">
              {name}
            </Button>
          </Col>
        ))}
      </Row>

      <h3 className="title">Custom Transactions</h3>
      <Form>
        <Row>
          <Col md="4" xs="6">
            <p className="category">Recipient</p>

            {players.map(({ key, name }, x) => (
              <FormGroup check className="form-check-radio" key={x}>
                <Label check>
                  <Input
                    name="bankTransactionRecipient"
                    type="radio"
                    checked={bankTransactionValues.recipient == key}
                    onClick={() =>
                      setBankTransactionValues((current) => ({
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
                value={bankTransactionValues.amount}
                onChange={(e) =>
                  setBankTransactionValues((current) => ({
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
                {bankTransactionValues.note || "Note"}
              </DropdownToggle>

              <DropdownMenu>
                {bankNotes.map((note, x) => (
                  <DropdownItem
                    href="#pablo"
                    onClick={() =>
                      setBankTransactionValues((current) => ({
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
          onClick={submitBankTransaction}
        >
          Submit Transaction
        </Button>
      </Form>
    </Container>
  );
}
