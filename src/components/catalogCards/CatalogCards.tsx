import {Key} from "react";
import cn from 'clsx'
import styles from './CatalogCards.module.scss'
import defaultIcon from '../../assets/img/defaultImageCatalog.png'
import LinkCategory from "../linkCategory/LinkCategory";
import {CategoryItems} from "../../shared/types/CatalogTypes";
import {Link} from "react-router-dom";

interface IProp {
    text: string;
    cards: CategoryItems[];
}

interface Card {
    link: string;
    name: string;
    icon?: string;
}

export default function CatalogCards({text, cards}: IProp) {
    return <div>
        {text && <div className={styles.card__title}>{text}</div>}
        <div className={styles.card__box}>
            {cards && cards.map(
                (item, key: Key)=> <div key={key}>
                    <Link to={`/catalog/${item.uid}`} className={styles.card__info}>
                        <div className={styles.card_flex}>
                            {/*{item.icon?*/}
                            {/*    <img className={styles.card__icon} src={item.icon} alt={'image'} />*/}
                            {/*    :*/}
                            <img className={styles.card__icon} src={defaultIcon} alt={'image'} />
                            {/*}*/}
                            <div className={styles.card__text}>{item.name}<div className={cn(styles.card__arrow, 'icon-arrow-right')}/></div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    </div>
}