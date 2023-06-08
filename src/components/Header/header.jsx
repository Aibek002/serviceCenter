import React from 'react';
import logo from '../Content/img/logoHeader.png'
import { Container, NavDropdown, Navbar, Nav, Form, Button } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="dark" expand="md">
      <Container >{/*fluid*/ }
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt=""
            width={200}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav className={s.header}>
    //   <nav className={s.headerItem}>
    //     <div className={s.item}>
    //       <img className={s.imgLogo}
    //         src={logo}
    //         alt="logoGamaGroup" />
    //     </div>
    //     <div className={s.item}>
    //       <NavLink style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "", color: isActive ? "#b31400" : "white", }; }} to='/'>Home</NavLink>
    //       <NavLink style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "", color: isActive ? " #b31400" : "white", }; }} to="/services">Услуги</NavLink>
    //       <NavLink style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "", color: isActive ? " #b31400" : "white", }; }} to="/info">О нас</NavLink>
    //       <NavLink style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "", color: isActive ? " #b31400" : "white", }; }} to="/Comment">Отзывы</NavLink> </div>
    //     <div className={s.item}>
    //       <img className={s.imgMessage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="" />
    //       <img className={s.imgMessage} src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png" alt="" />
    //       <img className={s.imgMessage} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3433080/phone-icon-md.png" alt="" />

    //     </div>
    //   </nav>
    // </nav>
  );
}

export default Header;
