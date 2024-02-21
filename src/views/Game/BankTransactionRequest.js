import { Container } from "reactstrap";

import FormRenderer from "components/Form";
import * as API from "../../api/apis";

export default function BankTransactionRequest() {
  const notes = ["Round", "Chance / X", "Mortgage"];

  const onSubmit = (values) => {
    API.requestFromBank(values);
  };

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Request Credit From Bank</h2>

      <FormRenderer
        submitLabel="Submit Request"
        onSubmit={onSubmit}
        inputs={[
          {
            label: "Amount",
            name: "amount",
            type: "number",
            min: 0,
            required: true,
          },
          {
            label: "Note",
            name: "note",
            type: "select",
            options: notes.map((name) => ({
              value: name,
              label: name,
            })),
            haveOtherOption: true,
            required: true,
          },
        ]}
      />
    </Container>
  );
}
