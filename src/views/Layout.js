import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import Navbar from "components/Navbar";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "views/Error404";
import GamePage from "views/Game";
import StartPage from "views/Start";
import BankTransactionRequest from "./Game/BankTransactionRequest";
import BankTransactions from "./Game/BankTransactions";
import PlayersList from "./Game/PlayersList";
import TransactionsHistory from "./Game/TransactionsHistory";
import UserTransactions from "./Game/UserTransactions";
import WelcomeSection from "./Game/Welcome";
import AppInfo from "./Game/AppInfo";

export default function Layout() {
  return (
    <BrowserRouter>
      <div className="pt-5 header-6">
        <Navbar />

        {/* <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 2,
          }}
        >
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
        </div> */}

        <Routes>
          {localStorage.getItem("game")?.length ? (
            <Fragment>
              <Route path="/" element={<WelcomeSection players={[]} />} />
              <Route
                path="/send-credit"
                element={<UserTransactions players={[]} />}
              />
              <Route
                path="/request-from-bank"
                element={<BankTransactionRequest />}
              />
              <Route
                path="/bank-transactions"
                element={<BankTransactions players={[]} />}
              />
              <Route
                path="/transactions-history"
                element={<TransactionsHistory />}
              />
              <Route path="/players-list" element={<PlayersList data={[]} />} />
              <Route path="/app-info" element={<AppInfo />} />
            </Fragment>
          ) : (
            <Route path="/" element={<StartPage />} />
          )}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
