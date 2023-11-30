import styles from './Card.module.scss'
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import testImage from '../../assets/imgPng/5.png'

interface IPropCard {
    images?: string;
    name?: string;
    secondName?: string;
    price?: number;
}

function Card({images, name, secondName, price}: IPropCard) {
    return (
        <div className={styles.card}>
            <div>
                {!images && <img className={styles.card__image} src={testImage} alt={name}/> }
            </div>
            <div className={styles.card__info}>
                <div className={styles.card__textGray}>{secondName}</div>
                <div className={styles.card__textBlue}>{name}</div>
                <div className={styles.card__price}>${price}</div>
                <div className={styles.image}><Button type={ButtonType.Blue} imageClassName={'icon-cart'} heightImage={16}/> </div>
            </div>
        </div>
    )
}

export default Card