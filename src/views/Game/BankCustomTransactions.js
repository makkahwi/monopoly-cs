import { Fragment } from "react";

import FormRenderer from "components/Form";

export default function BankCustomTransactions({ players }) {
  const notes = ["Chance / X", "Mortgage"];

  return (
    <Fragment>
      <h3 className="title">Custom Transactions</h3>

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
    </Fragment>
  );
}
