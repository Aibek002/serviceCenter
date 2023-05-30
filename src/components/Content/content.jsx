
import s from './content.module.css';
import React from 'react';


function Content() {
  return (
    <div className={s.content}>
      <div className={s.contentItem}>
        <div className={s.item}><p className={s.textTitle}>Оценка недвижимости в Алматы</p></div>
        <div className={s.item}><p className={s.text}>Предварительная оценка имущества за<br /> 2 часа - БЕСПЛАТНО!</p></div>

        <div className={s.item}><p className={s.text}></p><button>Оставить заявку</button></div>

        <div className={s.item}>
          <div className={s.box1}><p className={s.textOfBox}>Скачайте,<br />
            полный список документов необходимых для оценки</p><button className={s.button}>Подробнее</button></div>
          <div className={s.box2}><p className={s.textOfBox}>Ответьте на 3 простых вопроса и получите: скидку 20%
            на оценочные услуги
          </p><button className={s.button}>Подробнее</button></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
