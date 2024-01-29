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
          <NavItem>
            <ButtonGroup className="nav-link">
              <a href="https://linktr.ee/makkahwi" target="_blank">
                <Button color="success" size="sm">
                  <p>Check Developer</p>
                </Button>
              </a>

              <Button
                color="danger"
                size="sm"
                onClick={() => {
                  localStorage.removeItem("game");
                  navigate(0);
                }}
              >
                <p>Exit Game</p>
              </Button>
            </ButtonGroup>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
