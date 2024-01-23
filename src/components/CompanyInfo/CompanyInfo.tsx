import styles from './CompanyInfo.module.scss'
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import house from '../../assets/imgPng/house.png'
import image from '../../assets/imgPng/Image.png'
import image1 from '../../assets/imgPng/Image2.png'
import image2 from '../../assets/imgPng/Image3.png'

const data = [
    {
        title: 'Wood\nmaterials',
        url: '',
        img: image
    },
    {
        title: 'Deck\naccessories',
        url: '',
        img: image1
    },
    {
        title: 'Lighting\naccessories',
        url: '',
        img: image2
    }
]

export default function CompanyInfo () {
    return <div className={styles.mainContainer}>
        <div className={styles.flexBox}>
            <div className={styles.info__text}>
                <div className={styles.info__text__info}>
                    Quality and exotic materials for your decking projects
                </div>
                <div className={styles.materialsLinks}>
                    {data.map(
                            (item, index)=> <div className={styles.itemLink__text} key={index}>
                                <a className={styles.itemLink} >
                                    <div className={styles.cardInfo}>{item.title}</div>
                                    <img className={styles.img} alt={`${item.title}`} src={item.img}/>
                                </a>
                            </div>
                        )}
                </div>
                <div className={styles.flexBoxDefault}>
                    <div className={styles.btnMargin}>
                        <Button text={'Full catalog'} imageClassName={'icon-arrow-right'} fontSize={16} link={'/catalog'}/>
                    </div>
                    <Button text={'Sign up'} imageClassName={'icon-user'} fontSize={16} type={ButtonType.White}/>
                </div>
            </div>
            <img className={styles.info__img} src={house} alt='house'/>
        </div>
    </div>
}