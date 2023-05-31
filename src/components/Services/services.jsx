import s from './services.module.css';
import React from 'react';






function Services() {
    return (
        <div className={s.services}>
            <p className={s.title}>Услуги оценочной компании GaMa Group.</p>
            <p className={s.textTitle}>Определение действительной рыночной стоимости бизнеса является важным этапом для развития компании.</p>
            <div className={s.menu}>
                <div className={s.item}>
            
                    <p className={s.titleText}>Оценка движимого и недвижимого имущества</p>
                    <p className={s.text}>Владельцам движимого и недвижимого имущества предлагаем...</p>
               
                    <p className={s.titleText}>Оценка интелектульной собственности </p>
                    <p className={s.text}>Оцениваем нематериальные активы, право требования...</p>
               
                <img src="https://www.weiss-chemie.com/fileadmin/_processed_/d/f/csm_company-icon_f159fa11f0.png" alt="" />
                    <p className={s.titleText}>Оценка коммерческого недвижимого имущества</p>
                    <p className={s.text}>Оцениваем магазины, заводы, незавершенное строительство, АЗС и...</p>
         
                <img src="https://cdn-icons-png.flaticon.com/512/4955/4955649.png" alt="" />
                    <p className={s.titleText}>Оценка ущерба</p>
                    <p className={s.text}>Независимая оценка ущерба поможет вам создать юридическую...</p>
                </div>
            </div>


        </div>
    );
}

export default Services;