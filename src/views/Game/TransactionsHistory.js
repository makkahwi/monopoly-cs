import { Container, Table } from "reactstrap";

export default function TransactionsHistory({ transactions }) {
  const transactionsTable = [
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

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Transactions History</h2>

      <Table className="tablesorter" responsive>
        <thead>
          <tr>
            <th>#</th>
            {transactionsTable.map(({ label }, x) => (
              <th key={x}>{label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, x) => (
            <tr key={x}>
              <td>{x + 1}</td>
              {transactionsTable.map(({ key }, y) => (
                <td key={y}>{transaction[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
