import { NavLink } from 'react-router-dom';
import s from './header.module.css';
import React from 'react';



function Header() {
  return (
    
    <nav className={s.header}>
      <nav  className={s.headerItem}>
      <div className={s.item}><img className={s.imgLogo} src="https://static.tildacdn.com/tild3231-3336-4334-a266-366539343965/2.png" alt="logoGamaGroup" /></div>
      <div className={s.item}>
        <NavLink style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? "#b31400" : "white", };}} to='/'>Home</NavLink>
        <NavLink  style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? " #b31400" : "white", };}} to="/services">Услуги</NavLink>
        <NavLink  style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? " #b31400" : "white", };}} to="/info">О нас</NavLink> 
        <NavLink  style={({ isActive}) => {return {fontWeight: isActive ? "bold" : "",  color: isActive ? " #b31400" : "white", };}} to="/Comment">Отзывы</NavLink> </div>
        <div className={s.item}>
        <img className={s.imgMessage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="" />
        <img className={s.imgMessage} src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png" alt="" />
        <img  className={s.imgMessage} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3433080/phone-icon-md.png" alt="" />
        
      </div>
  </nav>
</nav>
  );
}

export default Header;
