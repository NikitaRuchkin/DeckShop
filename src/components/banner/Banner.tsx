import styles from './Banner.module.scss'
import cn from 'clsx'

const data = [
    {
        special: 'More products',
        text: 'Visit catalog to browse \nmore of our products',
        img: 'icon-group'
    },
    {
        special: 'Limited offer',
        text: 'Get 10% off your first \norder by signing up',
        img: 'icon-circle'
    },
]

function Banner() {
    return (
        <div className={styles.mainContainer}>
            {data.map(
                (item, index)=> <div className={styles.banner} key={index}>
                    <div className={styles.banner__special}>{item.special}</div>
                    <div className={styles.banner__text}>{item.text}</div>
                    <div className={cn(styles.banner__arrow, 'icon-arrow-top-right')}/>
                    <div className={cn(styles.image, `${item.img}`)}/>
                </div>
            )}
        </div>
    )
}

export default Banner