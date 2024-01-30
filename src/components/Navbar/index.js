import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  UncontrolledTooltip,
} from "reactstrap";

export default function NavbarComp() {
  const navigate = useNavigate();

  const [navbarColor, setNavbarColor] = useState("navbar-transparent");

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-default");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };

  const links = [
    { icon: "fas fa-user", link: "/", label: "Profile" },
    {
      icon: "fas fa-right-from-bracket",
      link: "/send-credit",
      label: "Send Credit",
    },
    {
      icon: "fas fa-right-to-bracket",
      link: "/request-from-bank",
      label: "Request From Bank",
    },
    {
      icon: "fas fa-piggy-bank",
      link: "/bank-transactions",
      label: "Bank Transactions",
    },
    {
      icon: "fas fa-clock-rotate-left",
      link: "/transactions-history",
      label: "Transactions History",
    },
    { icon: "fas fa-users", link: "/players-list", label: "Players List" },
    { icon: "fas fa-info", link: "/app-info", label: "App Info" },
  ];

  return (
    <Navbar className={"fixed-top " + navbarColor} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="tooltip6619950104">
            Monopoly CS
          </NavbarBrand>

          <UncontrolledTooltip delay={0} target="tooltip6619950104">
            Designed and Coded by Makkahwi
          </UncontrolledTooltip>
        </div>

        <Nav className="ml-auto" navbar>
          {links.map(({ link, label }, i) => (
            <NavItem role="button" onClick={() => navigate(link)} key={i}>
              <p>{label}</p>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
