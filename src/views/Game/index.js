import { Fragment, useEffect, useState } from "react";

import BankTransactionRequest from "./BankTransactionRequest";
import BankTransactions from "./BankTransactions";
import PlayersList from "./PlayersList";
import TransactionsHistory from "./TransactionsHistory";
import UserTransactions from "./UserTransactions";
import WelcomeSection from "./Welcome";
import * as API from "../../api/apis";

export default function GamePage() {
  const [bankInfo, setBankInfo] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    API.getBankInfo().then((res) => setBankInfo(res));
    API.getPlayers().then((res) => setPlayers(res));
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

      <TransactionsHistory />

      <PlayersList data={players} />
    </Fragment>
  );
}
