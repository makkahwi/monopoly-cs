import {
  Button,
  ButtonGroup,
  Container,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

export default function PlayersList({ data }) {
  const tableColumns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "status",
      label: "Status",
    },
  ];

  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Players List</h2>

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
                    color="warning"
                    size="sm"
                    id="lost"
                  >
                    <i className="fas fa-heart-crack" />
                  </Button>

                  <UncontrolledTooltip delay={0} target="lost">
                    Lost
                  </UncontrolledTooltip>

                  <Button
                    className="btn-icon"
                    color="danger"
                    size="sm"
                    id="delete"
                  >
                    <i className="fas fa-trash" />
                  </Button>

                  <UncontrolledTooltip delay={0} target="delete">
                    Delete
                  </UncontrolledTooltip>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
