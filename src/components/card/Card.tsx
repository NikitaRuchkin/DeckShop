import {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cn from "clsx";
import { Carousel } from 'react-responsive-carousel';
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
    const [showArrows, setShowArrows] = useState<boolean>(false)

    return (
        <div className={styles.card}>
            <div>
                {images? <img className={styles.card__image} src={testImage} alt={name}/> :
                    <div onMouseEnter={()=> setShowArrows(true)}
                         onMouseLeave={()=> setShowArrows(false)}>
                        <Carousel showStatus={showArrows} showIndicators={false}
                                  stopOnHover={true}
                                  autoPlay={false}
                                  showThumbs={false}
                                  showArrows={false}
                                  swipeable={false}
                                  infiniteLoop={true}
                                  className={styles.carouselProp}
                                  renderArrowNext={(onClickHandler, hasNext, label) =>
                                      <div
                                          className={cn(styles.arrow, styles.arrow__left_position, !showArrows && styles.arrowHidden)}
                                          onClick={onClickHandler}
                                          title={label}>
                                          <div className={cn(styles.arrow__right, 'icon-arrow-right')}/>
                                      </div>
                                  }
                                  renderArrowPrev={(onClickHandler, hasNext, label) =>
                                      <div
                                          className={cn(styles.arrow, styles.arrow__right_position, !showArrows && styles.arrowHidden)}
                                          onClick={onClickHandler}
                                          title={label}>
                                          <div className={cn(styles.arrow__left, 'icon-arrow-right')}/>
                                      </div>
                                  }
                                  statusFormatter={(currentItem, total)=> `${currentItem} / ${total}`}
                        >
                            <div className={styles.carousel__element}>
                                <img src={testImage} alt='test'/>
                            </div>
                            <div className={styles.carousel__element}>
                                <img src={testImage} alt='test'/>
                            </div>
                            <div className={styles.carousel__element}>
                                <img src={testImage} alt='test'/>
                            </div>
                            <div className={styles.carousel__element}>
                                <img src={testImage} alt='test'/>
                            </div>
                        </Carousel>
                    </div>
                }
            <div/>
            <div className={styles.card__info}>
                <div className={styles.card__textGray}>{secondName}</div>
                <div className={styles.card__textBlue}>{name}</div>
                <div className={styles.card__price}>${price}</div>
                <div className={styles.image}><Button type={ButtonType.Blue} imageClassName={'icon-cart'} fontSize={16}/> </div>
            </div>
        </div>
        </div>
    )
}

export default Card