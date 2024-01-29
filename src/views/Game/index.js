import { Fragment, useState } from "react";
import BankTransactions from "./BankTransactions";
import TransactionsHistory from "./TransactionsHistory";
import UserTransactions from "./UserTransactions";
import WelcomeSection from "./Welcome";
import BankTransactionRequest from "./BankTransactionRequest";

export default function GamePage() {
  const [userTransactionValues, setUserTransactionValues] = useState({
    recipient: "",
    amount: 0,
    note: "",
  });

  const [bankTransactionValues, setBankTransactionValues] = useState({
    recipient: "",
    amount: 0,
    note: "",
  });

  const [transactions, setTransactions] = useState([
    {
      from: "X",
      to: "Y",
      amount: 10,
      note: "Rent",
    },
    {
      from: "X",
      to: "Bank",
      amount: 150,
      note: "Buy",
    },
  ]);

  const [bankInfo, setBankInfo] = useState({
    key: 0,
    name: "Bank",
  });

  const players = [
    {
      key: 2,
      name: "Player X",
    },
    {
      key: 4,
      name: "Player Y",
    },
  ];

  const submitUserTransaction = () => {
    console.log({ userTransactionValues });
  };

  const submitBankTransaction = () => {
    console.log({ bankTransactionValues });
  };

  return (
    <Fragment>
      <WelcomeSection players={players} credit={500} />

      <UserTransactions
        players={[...players, bankInfo]}
        userTransactionValues={userTransactionValues}
        setUserTransactionValues={setUserTransactionValues}
        submitUserTransaction={submitUserTransaction}
      />

      <BankTransactionRequest
        bankTransactionValues={bankTransactionValues}
        setBankTransactionValues={setBankTransactionValues}
        submitBankTransaction={submitBankTransaction}
      />

      <BankTransactions
        players={players}
        bankTransactionValues={bankTransactionValues}
        setBankTransactionValues={setBankTransactionValues}
        submitBankTransaction={submitBankTransaction}
      />

      <TransactionsHistory transactions={transactions} />
    </Fragment>
  );
}
