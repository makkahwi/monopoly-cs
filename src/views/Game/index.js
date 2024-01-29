import { Fragment, useState } from "react";
import BankTransactions from "./BankTransactions";
import TransactionsHistory from "./TransactionsHistory";
import UserTransactions from "./UserTransactions";
import WelcomeSection from "./Welcome";

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

  const players = [
    {
      key: 0,
      name: "Bank",
    },
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
      <WelcomeSection />

      <UserTransactions
        players={players}
        userTransactionValues={userTransactionValues}
        setUserTransactionValues={setUserTransactionValues}
        submitUserTransaction={submitUserTransaction}
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
