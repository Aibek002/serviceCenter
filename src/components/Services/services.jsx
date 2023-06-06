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
                    <p className={s.text}>

                    Оценка имущества - процесс определения стоимости и оценки движимого и недвижимого активов. 
                    Эта услуга выполняется опытными оценщиками и используется в финансовых, страховых и юридических сферах. 
                    Оценка имущества включает анализ рынка, применение специальных методов оценки и подготовку соответствующего отчета.
                       </p>

                    <p className={s.titleText}>Оценка интелектульной собственности </p>
                    <p className={s.text}>Оцениваем нематериальные активы, право требования...</p>

                    <p className={s.titleText}>Оценка коммерческого недвижимого имущества</p>
                    <p className={s.text}>Оцениваем магазины, заводы, незавершенное строительство, АЗС и...</p>

                    <p className={s.titleText}>Оценка ущерба</p>
                    <p className={s.text}>Независимая оценка ущерба поможет вам создать юридическую...</p>
                </div>
            </div>


        </div>
    );
}

export default Services;