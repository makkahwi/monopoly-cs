import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "views/Error404";
import GamePage from "views/Game";
import StartPage from "views/Start";

export default function Layout() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="py-5 header-6">
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
            <Route path="/" element={<GamePage />} />
          ) : (
            <Route path="/" element={<StartPage />} />
          )}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
