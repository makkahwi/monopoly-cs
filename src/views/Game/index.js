import { Fragment, useEffect, useState } from "react";
import BankTransactions from "./BankTransactions";
import TransactionsHistory from "./TransactionsHistory";
import UserTransactions from "./UserTransactions";
import WelcomeSection from "./Welcome";
import BankTransactionRequest from "./BankTransactionRequest";

export default function GamePage() {
  const initialTransactionValues = {
    recipient: "",
    amount: 0,
    note: "",
  };

  const [userTransactionValues, setUserTransactionValues] = useState(
    initialTransactionValues
  );
  const [bankTransactionRequestValues, setBankTransactionRequestValues] =
    useState(initialTransactionValues);
  const [bankTransactionValues, setBankTransactionValues] = useState(
    initialTransactionValues
  );
  const [transactionsData, setTransactionsData] = useState([]);
  const [bankInfo, setBankInfo] = useState({});
  const [players, setPlayers] = useState([]);

  const submitUserTransaction = () => {
    console.log({ userTransactionValues });
    setUserTransactionValues(initialTransactionValues);
  };

  const submitBankTransactionRequest = () => {
    console.log({ bankTransactionRequestValues });
    setBankTransactionRequestValues(initialTransactionValues);
  };

  const submitBankTransaction = () => {
    console.log({ bankTransactionValues });
    setBankTransactionValues(initialTransactionValues);
  };

  useEffect(() => {
    setTransactionsData([
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

    setBankInfo({
      key: 0,
      name: "Bank",
    });

    setPlayers([
      {
        key: 2,
        name: "Player X",
      },
      {
        key: 4,
        name: "Player Y",
      },
    ]);
  }, []);

  return (
    <Fragment>
      <WelcomeSection players={players} credit={500} />

      <UserTransactions
        players={[...players, bankInfo]}
        values={userTransactionValues}
        setValues={setUserTransactionValues}
        submit={submitUserTransaction}
      />

      <BankTransactionRequest
        values={bankTransactionRequestValues}
        setValues={setBankTransactionRequestValues}
        submit={submitBankTransactionRequest}
      />

      <BankTransactions
        players={players}
        values={bankTransactionValues}
        setValues={setBankTransactionValues}
        submit={submitBankTransaction}
      />

      <TransactionsHistory data={transactionsData} />
    </Fragment>
  );
}
