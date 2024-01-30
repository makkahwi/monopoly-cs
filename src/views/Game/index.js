import { Fragment, useEffect, useState } from "react";

import BankTransactionRequest from "./BankTransactionRequest";
import BankTransactions from "./BankTransactions";
import PlayersList from "./PlayersList";
import TransactionsHistory from "./TransactionsHistory";
import UserTransactions from "./UserTransactions";
import WelcomeSection from "./Welcome";

export default function GamePage() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [bankInfo, setBankInfo] = useState({});
  const [players, setPlayers] = useState([]);

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
        status: "Active",
      },
      {
        key: 3,
        name: "Player Y",
        status: "Lost",
      },
      {
        key: 4,
        name: "Player Z",
        status: "Active",
      },
    ]);
  }, []);

  return (
    <Fragment>
      <WelcomeSection players={players} credit={500} />

      <UserTransactions
        players={[
          ...players.filter(({ status }) => status == "Active"),
          bankInfo,
        ]}
      />

      <BankTransactionRequest />

      <BankTransactions
        players={players.filter(({ status }) => status == "Active")}
      />

      <TransactionsHistory data={transactionsData} />

      <PlayersList data={players} />
    </Fragment>
  );
}
