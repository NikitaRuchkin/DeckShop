import styles from './CardDesign.module.scss'
import visaLogo from "../../assets/img/VisaLogo.svg";
import cn from "clsx";

export default function CardDesign() {
  return <div className={styles.fields__card}>
    <div className={styles.fields__card__info}>
      <div><img src={visaLogo} alt={'payment logo'}/></div>
      <div className={styles.fields__card__text}>**** **** **** 1129</div>
    </div>
    <div className={styles.fields__card__info}>
      <div className={cn(styles.fields__card__text, styles.fields__card__textGrey)}>IGOR YASHKIN</div>
      <div className={cn(styles.fields__card__text, styles.fields__card__textGrey)}>07/26</div>
    </div>
  </div>
}