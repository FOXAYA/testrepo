/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION
============================================================================= */
// React Cote.
import { useState } from "react";

// Styling.
import styled from "styled-components";

// UI Component.
import { Nav, Navbar, Offcanvas, CloseButton } from "react-bootstrap";
import { Container, Logo  } from "../../styles/StyledComponents";
import ButtonUi from "../../ui/Button";

/* =============================================================================
                              STYLED COMPONENT
============================================================================= */
const StyledNavbar = styled(Navbar)`
  padding: 30px;

  @media (max-width: 992px) {
    padding: 30px 0px !important;
  }
`
const StyledOffcanvas = styled(Offcanvas)`
  background-color: #22282d;
  z-index: 8888;

  a {
    color: #bfbaba;
    padding: 2rem;
    border-top: 1px solid rgb(255 255 255 / 10%);
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    transition: color 0.4s;
  }

  a:hover {
    color: var(--clr-brand-600);
  }
`
const StyledNavbarToggle = styled(Navbar.Toggle)`
  font-size: 2rem;
  border: none;

  &:focus {
    box-shadow: none;
  }
`
const StyledCloseButton = styled(CloseButton)`
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  border: none;

  &:focus {
    box-shadow: none;
  }
`

/* =============================================================================
                              LINKS.
============================================================================= */
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#aboutus", label: "About Us" },
  { href: "#ourWorks", label: "Our Works" },
  { href: "#contactus", label: "Contact Us" },
];

/* =============================================================================
                              MAIN COMPONENT
============================================================================= */
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledNavbar expand="lg" variant="dark" id="home">
        <Container className="d-flex justify-content-between align-items-center gap-4 fs-4">
          {/* Logo */}
          <Logo href="#home">
            <img src="./home/logo.svg" alt="Smart House" />
          </Logo>

          {/* Desktop Nav Links & Button */}
          <div className="d-none d-lg-flex align-items-center gap-4 w-100 justify-content-center">
            <Nav className="gap-5 mx-auto">
              {NAV_LINKS.map(({ href, label }) => (
                <Nav.Link key={href} href={href} className="text-white text-uppercase">
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <ButtonUi href="#contactus" text="Let's Talk" />
          </div>

          {/* Mobile Toggle Button */}
          <div className="d-lg-none">
            <StyledNavbarToggle
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={handleShow}
            />
          </div>
        </Container>
      </StyledNavbar>

      {/* Offcanvas Menu (Mobile Only) */}
      <StyledOffcanvas
        id="offcanvasNavbar"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <StyledOffcanvas.Header className="d-flex justify-content-end">
          <StyledCloseButton onClick={handleClose} />
        </StyledOffcanvas.Header>

        <StyledOffcanvas.Body className="d-flex justify-content-start align-items-start p-0">
          <Nav className="flex-column w-100 fs-3 text-uppercase">
            {NAV_LINKS.map(({ href, label }) => (
              <Nav.Link
                key={href}
                href={href}
                onClick={handleClose}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </StyledOffcanvas.Body>

      </StyledOffcanvas>
    </>
  );
}

/* =============================================================================
                              EXPORT
============================================================================= */
export default Header;
