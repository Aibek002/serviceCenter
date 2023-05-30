
import s from './content.module.css';
import React from 'react';


function Content() {
  const logoStyle = {
    display: 'flex',
    marginRight: '10px',
  };
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

              <p>
                +7 (727) 327 27 73 ,<br />
                +7 (707) 327 27 73 ,<br />
                info@gamagroup.kz
              </p>

            </div>
            <div className={s.flexItem2}>sdfsdf</div>
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
