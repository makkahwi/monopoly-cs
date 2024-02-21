import { Fragment } from "react";
import { Button, Col, Container, Row, UncontrolledTooltip } from "reactstrap";

export default function Footer() {
  const socialMediaLinks = [
    {
      icon: "fas fa-globe",
      link: "https://suhaib.dev/",
      tooltip: "Own Website",
    },
    {
      icon: "fab fa-linkedin",
      link: "https://linkedin.com/in/makkahwi/",
      tooltip: "Makkahwi @ Linkedin",
    },
    {
      icon: "fab fa-facebook",
      link: "https://facebook.com/makkahwi",
      tooltip: "Makkahwi @ Facebook",
    },
    {
      icon: "fab fa-instagram",
      link: "https://instagram.com/makkahwi",
      tooltip: "Makkahwi @ Instagram",
    },
    {
      icon: "fab fa-whatsapp",
      link: "https://wasap.my/962788424973",
      tooltip: "+962788424973 @ Whatsapp",
    },
    {
      icon: "fab fa-telegram",
      link: "https://t.me/makkahwi",
      tooltip: "+962788424973 @ Telegram",
    },
    {
      icon: "fas fa-envelope",
      link: "mailto:SuhaibAhmadAi@hotmail.com",
      tooltip: "SuhaibAhmadAi@hotmail.com",
    },
    {
      icon: "fas fa-phone",
      link: "tel:+962788424973",
      tooltip: "+962788424973",
    },
  ];

  return (
    <footer className="py-3" style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
      <Container>
        <Row>
          <Col md="6">
            <h3 className="title">Monopoly Credit Sheet</h3>

            <h2 className="title">(Monopoly CS)</h2>
          </Col>

          <Col md="6">
            <h5 className="title">
              Follow Creator{" "}
              {socialMediaLinks.map(({ link, icon, tooltip }, i) => (
                <Fragment key={i}>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple mx-1"
                    color="default"
                    href={link}
                    id={icon.replace(" ", "")}
                    target="_blank"
                    size="sm"
                  >
                    <i className={icon} />
                  </Button>

                  <UncontrolledTooltip delay={0} target={icon.replace(" ", "")}>
                    {tooltip}
                  </UncontrolledTooltip>
                </Fragment>
              ))}
            </h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
