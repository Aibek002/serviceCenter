
import s from './content.module.css';
import companyLogo from './img/sh.png';


function Content() {
  return (
    <div className={s.content}>

<div className={s.item}><p className={s.textTitle}>Оценка недвижимости в Алматы</p></div>
<div className={s.item}><p className={s.text}>Предварительная оценка имущества за<br/> 2 часа - БЕСПЛАТНО!</p></div>
<div className={s.item}><img className={s.Logo} width="500px" src={companyLogo} alt="here" /></div>
<div className={s.item}><p className={s.text}></p><button>Оставить заявку</button></div>

<div className={s.item}>
<div className={s.box1}><p className={s.textOfBox}>Скачайте,<br/>
полный список документов необходимых для оценки</p><button className={s.button}>Оставить заявку</button></div>
<div className={s.box2}><p className={s.textOfBox}>Ответьте на 3 простых вопроса и <br/>получите: скидку 20%
на оценочные услуги
</p><button className={s.button}>Оставить заявку</button></div>
</div>
<div></div>
<svg className={s.banner} xmlns="http://www.w3.org/2000/svg" viewBox="30 0 1140 420">
  <path fill="rgb(35, 35, 35)" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,256C384,277,480,299,576,256C672,213,768,107,864,90.7C960,75,1056,149,1152,181.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
 
    
    </div>
  );
}

export default Content;
