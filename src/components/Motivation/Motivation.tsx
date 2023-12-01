import cn from 'clsx'
import styles from './Motivation.module.scss'

export default function Motivation () {
    return <div className={styles.mainContainer}>
        <div className={styles.howWeStand}>How we stand out</div>
        <div className={styles.text}>We always strive to motivate our<br/> potential customers to work with us</div>
        <div className={styles.cardBox}>
            <div className={styles.cardBox__card}>
                <div className={styles.cardBox__text}>
                    <div className={styles.cardBox__text}>Exclusive materials</div>
                    <div className={styles.cardBox__line}>Our products originate from tropical countries across the globe, showcasing rare and unique materials that are simply unattainable elsewhere.</div>
                </div>
                <div className={cn(styles.image, 'icon-sphere')}></div>
            </div>
            <div className={styles.cardBox__card}>
                <div className={styles.cardBox__text}>
                    <div className={styles.cardBox__text}>Premium quality</div>
                    <div className={styles.cardBox__line}>We take pride in our commitment to delivering AAA grade products, ensuring our clients receive top-notch materials for their upcoming projects</div>
                </div>
                <div className={cn(styles.image, 'icon-road')}></div>
            </div>
            <div className={styles.cardBox__card}>
                <div className={styles.cardBox__text}>
                    <div className={styles.cardBox__text}>Convenient delivery</div>
                    <div className={styles.cardBox__line}>With a focus on timely delivery, we're dedicated to providing a seamless and satisfyling experience for all our clients</div>
                </div>
                <div className={cn(styles.image, 'icon-tree')}></div>
            </div>
        </div>
    </div>
}