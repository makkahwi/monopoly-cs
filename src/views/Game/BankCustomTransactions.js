import { Fragment } from "react";

import FormRenderer from "components/Form";
import * as API from "../../api/apis";

export default function BankCustomTransactions({ players }) {
  const notes = ["Chance / X", "Mortgage"];

  const onSubmit = (values) => {
    API.addCredit(values);
  };

  return (
    <Fragment>
      <h3 className="title">Custom Transactions</h3>

      <FormRenderer
        submitLabel="Submit Transaction"
        onSubmit={onSubmit}
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
            haveOtherOption: true,
            required: true,
          },
        ]}
      />
    </Fragment>
  );
}
