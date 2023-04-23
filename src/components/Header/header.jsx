
import s from './header.module.css';



function Header() {
  return (
    <div className={s.header}>

            <div className={s.item}><img className={s.imgLogo} src="https://static.tildacdn.com/tild3231-3336-4334-a266-366539343965/2.png" alt="logoGamaGroup" /></div>
            <div className={s.item}></div>
            <div className={s.item}><a className={s.a} href="/">Главная</a> <a className={s.a}  href="/">Услуги</a> <a className={s.a}  href="/">Информация</a> </div>
            <div className={s.item}><img className={s.imgMessage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="" /><img className={s.imgMessage} src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png" alt="" /></div>
            
    
    </div>
  );
}

export default Header;
