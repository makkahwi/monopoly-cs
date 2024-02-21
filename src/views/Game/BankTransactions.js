import { Container } from "reactstrap";

import BankCustomTransactions from "./BankCustomTransactions";
import BankQuickTransactions from "./BankQuickTransactions";
import BankRequestedTransaction from "./BankRequestedTransaction";

export default function BankTransactions({ players }) {
  return (
    <Container
      className="rounded-lg p-5 my-5"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <h2 className="title">Send Credit From Bank To User</h2>

      <BankQuickTransactions players={players} />

      <BankRequestedTransaction />

      <BankCustomTransactions players={players} />
    </Container>
  );
}
