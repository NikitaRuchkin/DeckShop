import cn from 'clsx'
import styles from './Motivation.module.scss'

export default function Motivation () {
    return <div className={styles.mainContainer}>
        <div className={styles.howWeStand}>How we stand out</div>
        <div className={styles.text}>We always strive to motivate our<br/> potential customers to work with us</div>
        <div className={styles.cardBox}>
            <div className={styles.cardBox__card}>
                <div className={styles.cardBox__text}>Exclusive materials</div>
                <div className={cn(styles.image, 'icon-sphere')}></div>
            </div>
            <div className={styles.cardBox__card}>
                <div className={styles.cardBox__text}>Premium quality</div>
                <div className={cn(styles.image, 'icon-road')}></div>
            </div>
            <div className={styles.cardBox__card}>
                <div className={styles.cardBox__text}>Convenient delivery</div>
                <div className={cn(styles.image, 'icon-tree')}></div>
            </div>
        </div>
    </div>
}