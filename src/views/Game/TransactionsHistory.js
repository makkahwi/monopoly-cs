import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import * as API from "../../api/apis";

export default function TransactionsHistory() {
  const [data, setData] = useState([]);

  const tableColumns = [
    {
      key: "from",
      label: "From",
    },
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
    API.getTransactions().then((res) => setData(res));
  }, []);

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Transactions History</h2>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableColumns.map(({ label }, x) => (
              <th key={x}>{label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((transaction, x) => (
            <tr key={x}>
              <td>{x + 1}</td>
              {tableColumns.map(({ key }, y) => (
                <td key={y}>{transaction[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
