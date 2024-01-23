import styles from './Banner.module.scss'
import cn from 'clsx'
import {useState} from "react";
import {Link} from "react-router-dom";

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
    const [scale, setScale] = useState<number>(-1)
    return (
        <div className={styles.mainContainer}>
            {data.map(
                (item, index)=> <Link to={'/catalog'} className={styles.banner} key={index}
                                     onMouseEnter={()=> setScale(index)}
                                     onMouseLeave={()=> setScale(-1)}
                >
                    <div className={styles.banner__special}>{item.special}</div>
                    <div className={styles.banner__text}>{item.text}</div>
                    <div className={cn(styles.banner__arrow, 'icon-arrow-top-right')}/>
                    <div className={cn(styles.image, `${item.img}`)}/>
                </Link>
            )}
        </div>
    )
}

export default Banner