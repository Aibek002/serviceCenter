
import s from './content.module.css';
import React from 'react';
function Content() {
  const logoStyle = {
    display: 'flex',
    marginRight: '10px',
  };
  const contctUs = {
    margin: '0px',
    textTransform: 'uppercase',
  }
  const textContactUs = {
    fontSize: '0.75rem',
    fontWeight: '300',
    textAlign: 'left',
    lineHeight: '1.5',
    marginLeft: '20px',

  }


  return (
    <div className={s.content}>
      
      <div className={s.contentItem}>
        <div className={s.item}><p className={s.textTitle}>Оценка недвижимости в Алматы</p></div>
        <div className={s.item}><p className={s.text}>Предварите​льный оценка<br /> 2 часа - БЕСПЛАТНО</p></div>

        <div className={s.item}>
          <div className={s.flex}>
            <div className={s.flexItem1}>
              <div style={logoStyle}> <img src="https://assets.nicepagecdn.com/80badba9/4873990/images/597177-39fea02a.png" className={s.logoFlex} alt="" />
                <h3>НАШИ КОНТАКТЫ</h3></div>
              <p style={textContactUs}>
                +7 (727) 327 27 73 ,<br />
                +7 (707) 327 27 73 ,<br />
                info@gamagroup.kz
              </p>
              <div style={logoStyle}> <img src="https://assets.nicepagecdn.com/80badba9/4873990/images/3177361-cd9ee2c6.png" className={s.logoFlex} alt="" />
                <h3>НАШ АДРЕС</h3></div>
              <p style={textContactUs}>
                Республика Казахстан, Алматы,<br /> Жамбыла,114/85, офис 133
              </p>
              <div style={logoStyle}> <img src="https://assets.nicepagecdn.com/80badba9/4873990/images/447114-f6e8f45b.png" className={s.logoFlex} alt="" />
                <h3>ВРЕМЯ РАБОТЫ</h3></div>
              <p style={textContactUs}>
                Пн – Пт …… 10:00 – 20:00,<br />
                Сб, Вс ..….… Закрыто
              </p>
            </div>
            <div className={s.flexItem2}>
              <div >
                <h3 style={contctUs}>Свяжитесь с нами</h3>


               
              </div>
            </div>
          </div>
        </div>

        <div className={s.item}>
          {/* <div className={s.box1}><p className={s.textOfBox}>Скачайте,<br />
            полный список документов необходимых для оценки</p><button className={s.button}>Подробнее</button></div>
          <div className={s.box2}><p className={s.textOfBox}>Ответьте на 3 простых вопроса и получите: скидку 20%
            на оценочные услуги
          </p><button className={s.button}>Подробнее</button></div> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
