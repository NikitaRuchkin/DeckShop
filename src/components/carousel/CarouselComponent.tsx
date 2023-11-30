import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './CarouselComponent.module.scss'
import { Carousel } from 'react-responsive-carousel';
import cn from 'clsx'
import Card from "../card/Card";

interface IPropCarousel {
    special?: string;
    title?: string;
    products?: [];
}

const data = [
    <Card name='Test' secondName='Test1' price={120}/>,
    <Card name='Test' secondName='Test1' price={120}/>,
    <Card name='Test' secondName='Test1' price={120}/>,
    <Card name='Test' secondName='Test1' price={120}/>,
]

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
                          interval={5000}
                          autoPlay={false}
                          showArrows={false}
                          swipeable={true}
                          infiniteLoop={true}
                          renderArrowNext={(onClickHandler, hasNext, label) =>
                              <div
                                  className={cn(styles.arrow, styles.arrow__left_position)}
                                  // type="button"
                                  onClick={onClickHandler}
                                  title={label}>
                                  <div className={cn(styles.arrow__left, 'icon-arrow-right')}/>
                              </div>
                          }
                          renderArrowPrev={(onClickHandler, hasNext, label) =>
                              <div
                                  className={styles.arrow}
                                  // type="button"
                                  onClick={onClickHandler}
                                  title={label}>
                                  <div className={cn(styles.arrow__right, 'icon-arrow-right')}/>
                              </div>
                          }
                >
                    <div className={styles.card_carousel}>
                        {data.map(
                            (item)=> item
                        )}
                    </div>
                    <div className={styles.card_carousel}>
                        {data.map(
                            (item)=> item
                        )}
                    </div>
                    <div className={styles.card_carousel}>
                        {data.map(
                            (item)=> item
                        )}
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselComponent