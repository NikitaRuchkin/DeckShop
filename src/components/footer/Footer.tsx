import styles from './Footer.module.scss'
import cn from 'clsx'

const routes = [
    {
        title: 'Home',
        url: '',
    },
    {
        title: 'Catalog',
        url: '',
    },
    {
        title: 'Support',
        url: '',
    },
]

export default function Footer () {
    return  <div className={styles.mainContainer}>
        <div className={cn(styles.routesContainer, styles.marginBottom)}>
            <div className={styles.routes}>
                <div className={styles.logo}/>
                {routes.map(
                    (item, index)=> <div key={index} className={styles.routesLink}>{item.title}</div>
                )}
            </div>
            <div className={styles.city}>Toronto, Canada</div>
        </div>
        <div className={styles.routesContainer}>
            <div>
                <a className={styles.privacy}>Privacy policy</a>
                <a className={styles.privacy}>Terms & Conditions</a>
            </div>
            <div className={styles.privacyShop}>
                © 2023 DECK SHOP. All rights reserved.
            </div>
        </div>
    </div>
}