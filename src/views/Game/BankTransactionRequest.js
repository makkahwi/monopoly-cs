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

export default function BankTransactionRequest({ values, setValues, submit }) {
  const bankNotes = ["Round", "Chance / X", "Mortgage"];

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Request Credit From Bank</h2>

      <Form>
        <Row>
          <Col md="4" xs="6">
            <p className="category">Amount</p>

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
            <p className="category">Note</p>

            <UncontrolledDropdown>
              <DropdownToggle caret className="btn-block" color="primary">
                {values.note || "Note"}
              </DropdownToggle>

              <DropdownMenu>
                {bankNotes.map((note, x) => (
                  <DropdownItem
                    href="#pablo"
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

        <Button color="primary" type="button" className="my-4" onClick={submit}>
          Submit Request
        </Button>
      </Form>
    </Container>
  );
}
