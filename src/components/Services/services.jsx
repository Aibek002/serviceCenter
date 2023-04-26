
import Content from '../Content/content';
import s from './services.module.css';






function Services() {
    return (
        <div className={s.services}>
            <Content/>
            <p className={s.title}>Услуги оценочной компании GaMa Group.</p>
            <div className={s.menu}>
                <div className={s.item}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2557/2557959.png" alt="" />
                    <p className={s.titleText}>Оценка движимого и недвижимого имущества</p>
                    <p className={s.text}>Владельцам движимого и недвижимого имущества предлагаем...</p>
                </div>
                <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/2394/2394338.png" alt="" />
                    <p className={s.titleText}>Оценка интелектульной собственности </p>
                    <p className={s.text}>Оцениваем нематериальные активы, право требования...</p>
                </div>
                <div className={s.item}>
                <img src="https://www.weiss-chemie.com/fileadmin/_processed_/d/f/csm_company-icon_f159fa11f0.png" alt="" />
                    <p className={s.titleText}>Оценка коммерческого недвижимого имущества</p>
                    <p className={s.text}>Оцениваем магазины, заводы, незавершенное строительство, АЗС и...</p>
                </div>
                <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/4955/4955649.png" alt="" />
                    <p className={s.titleText}>Оценка ущерба</p>
                    <p className={s.text}>Независимая оценка ущерба поможет вам создать юридическую...</p>
                </div>
            </div>


        </div>
    );
}

export default Services;