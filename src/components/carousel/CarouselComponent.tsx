import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './CarouselComponent.module.scss'
import { Carousel } from 'react-responsive-carousel';
import cn from 'clsx'
import Card from "../card/Card";
import { Key } from "react";

interface IPropCarousel {
    special?: string;
    title?: string;
    products?: any[];
}

function CarouselComponent({special, title, products}: IPropCarousel) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.carouselContainer}>
                {special && <div className={styles.specialContainer}>
                    <div className={styles.carousel__special}>{special}</div>
                    <div className={cn(styles.carousel__special_arrow, 'icon-arrow-top-right')}/>
                </div>}
                {title && <div className={styles.carousel__title}>{title}</div>}
                <Carousel showStatus={false} showIndicators={false}
                          stopOnHover={true}
                          autoPlay={false}
                          showThumbs={false}
                          showArrows={false}
                          swipeable={true}
                          infiniteLoop={true}
                          renderArrowNext={(onClickHandler, hasNext, label) =>
                              <div
                                  className={cn(styles.arrow, styles.arrow__left_position)}
                                  onClick={onClickHandler}
                                  title={label}>
                                  <div className={cn(styles.arrow__right, 'icon-arrow-right')}/>
                              </div>
                          }
                          renderArrowPrev={(onClickHandler, hasNext, label) =>
                              <div
                                  className={styles.arrow}
                                  onClick={onClickHandler}
                                  title={label}>
                                  <div className={cn(styles.arrow__left, 'icon-arrow-right')}/>
                              </div>
                          }
                >
                    {products && products.map(
                        (itemArray, idx) => <div key={idx} className={styles.card_carousel}>
                            {itemArray.map(
                                (item: { name: string | undefined; sku: string | undefined; price: number | undefined; }, index: Key | null | undefined) =>
                                    <Card name={item.name} secondName={item.sku} price={item.price} key={index}/>
                            )}
                        </div>
                    )}

                </Carousel>
            </div>
        </div>
    )
}

export default CarouselComponent