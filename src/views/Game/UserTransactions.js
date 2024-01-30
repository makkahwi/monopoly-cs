import { Container } from "reactstrap";

import FormRenderer from "components/Form";

export default function UserTransactions({ players }) {
  const notes = ["Rent", "Buy", "Chance / X", "Tax"];

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Send Credit</h2>

      <FormRenderer
        submitLabel="Submit Transaction"
        onSubmit={(values) => console.log({ values })}
        inputs={[
          {
            label: "Recipient",
            name: "recipient",
            type: "select",
            options: players.map(({ key, name }) => ({
              value: key,
              label: name,
            })),
            required: true,
          },
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
            required: false,
          },
        ]}
      />
    </Container>
  );
}
