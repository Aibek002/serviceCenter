import { NavLink } from 'react-router-dom';
import s from './header.module.css';



function Header() {
  return (
    <nav className={s.header}>

      <div className={s.item}><img className={s.imgLogo} src="https://static.tildacdn.com/tild3231-3336-4334-a266-366539343965/2.png" alt="logoGamaGroup" /></div>
      <div className={s.item}>
        <NavLink style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? "#b31400" : "white", };}} to='/home'>Home</NavLink>
        <NavLink  style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? " #b31400" : "white", };}} to="/services">Услуги</NavLink>
        <NavLink  style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? " #b31400" : "white", };}} to="/info">Инфо</NavLink> </div>
      <div className={s.item}>
        <img className={s.imgMessage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="" />
        <img className={s.imgMessage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="" />
      </div>
      <div className={s.item}><button>+7 777 777 77 77</button></div>

    </nav>
  );
}

export default Header;
