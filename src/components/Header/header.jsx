import React from 'react';
import logo from '../Content/img/logoHeader.png'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import Services from '../Site/services';
import About from '../Site/about';
import Feadback from '../Site/feadback';
import Content from '../Content/content';
function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            alt="logo"
            width="200px"
            height="50px"
            className="d-inline-block align-top" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Главная</Nav.Link>
            <Nav.Link href='/services'>Услуги</Nav.Link>
            <Nav.Link href='/about'>О Нас</Nav.Link>
            <Nav.Link href='/feadback'>Отзывы</Nav.Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          </Nav>
          <Form className='d-flex' >
            <Form.Control
              type='text'
              placeholder='Search'
              className="me-2"
            />
<Button variant='outline-info'>Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Router>
    <Routes>
      <Route exact path='/' Component={Content}/>
      <Route exact path='/services' Component={Services}/>
      <Route exact path='/about' Component={About}/>
      <Route exact path='/feadback' Component={Feadback}/>
      </Routes>
    </Router>
    </>
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
