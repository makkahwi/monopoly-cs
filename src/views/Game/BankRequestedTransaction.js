import { Fragment, useEffect, useState } from "react";
import { Button, ButtonGroup, Table, UncontrolledTooltip } from "reactstrap";

export default function BankRequestedTransaction() {
  const [data, setData] = useState([]);

  const tableColumns = [
    {
      key: "to",
      label: "To",
    },
    {
      key: "amount",
      label: "Amount",
    },
    {
      key: "note",
      label: "Note",
    },
  ];

  useEffect(() => {
    setData([{ to: "Player X", amount: "100", note: "Round" }]);
  }, []);

  return (
    <Fragment>
      <h3 className="title">Requested Transaction</h3>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>

            {tableColumns.map(({ label }, x) => (
              <th key={x}>{label}</th>
            ))}

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((transaction, x) => (
            <tr key={x}>
              <td>{x + 1}</td>

              {tableColumns.map(({ key }, y) => (
                <td key={y}>{transaction[key]}</td>
              ))}

              <td>
                <ButtonGroup>
                  <Button
                    className="btn-icon"
                    color="success"
                    size="sm"
                    id="approve"
                  >
                    <i className="fas fa-check" />
                  </Button>

                  <UncontrolledTooltip delay={0} target="approve">
                    Approve
                  </UncontrolledTooltip>

                  <Button
                    className="btn-icon"
                    color="danger"
                    size="sm"
                    id="decline"
                  >
                    <i className="fas fa-xmark" />
                  </Button>

                  <UncontrolledTooltip delay={0} target="decline">
                    Decline
                  </UncontrolledTooltip>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}
