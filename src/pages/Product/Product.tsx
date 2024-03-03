import React, {useEffect, useState} from "react";
import cn from "clsx";
import styles from './Product.module.scss'
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import productImage from '../../assets/img/Product.png'
import Button from "../../components/button/Button";
import {data, preparedData} from "../../components/carousel/data";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import CircleButton from "../../components/circleButton/CircleButton";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getCardById} from "../../store/reducers/Products/ProductsReducer";

const dataImage = [
    {link: productImage},
    {link: productImage},
    {link: productImage},
    {link: productImage},
    {link: productImage},
]

export default function Product() {
    let {product} = useParams();
    const dispatch = useDispatch()
    const [products] = useState<any[]>(preparedData(data))
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const quantityMinus = () => {
        if(quantity === 1) {
            return
        }
        setQuantity(quantity - 1)
    }
    
    const cardInfo = useSelector((state: RootState)=>getCardById(state))
    // useEffect(()=> {
    //       dispatch(setCardById(product))
    //   }
    //   ,[])
    console.log('cardInfo: ', cardInfo)
    return <div className={styles.mainContainer}>
        <div className={styles.breadCrumbsBox}>
            <BreadCrumbs/>
        </div>
        <div className={styles.product}>
            <div className={styles.product__images}>
                <div className={styles.product__images__currentImage}>
                    <img src={dataImage[currentPhoto].link} alt='product image'/>
                </div>
                <div className={styles.imagesOfProductContainer}>
                    {dataImage.map(
                        (item, index)=>
                            <img
                                className={cn(styles.imagesOfProduct, index !== currentPhoto && styles.hiddenImages)}
                                onClick={()=> setCurrentPhoto(index)}
                                key={index}
                                src={item.link}
                                alt={`${index} product`}
                            />
                    )}
                </div>
            </div>
            <div className={styles.product__info}>
                <div className={styles.product__info__brend}>Trex</div>
                {/*<div className={styles.product__info__name}>{cardInfo && cardInfo.name}</div>*/}
                {/*<div className={styles.product__info__price}>${cardInfo && cardInfo.price_range.minimum_price.regular_price.value}</div>*/}
                <div>
                    <Button text={'Add to cart'} type={ButtonType.Blue} imageClassName={'icon-cart'} />
                </div>
                <div>
                    <div className={styles.line} />
                    <div className={styles.sectionInfo}>
                        <div className={styles.sectionInfo__width}>Width</div>
                        <div className={styles.sectionInfo__value}>12 in</div>
                    </div>
                    <div className={styles.sectionInfo}>
                        <div className={styles.sectionInfo__width}>Profile</div>
                        <div className={styles.sectionInfo__value}>Grooved</div>
                    </div>
                    <div className={styles.sectionInfo}>
                        <div>
                            <div className={styles.sectionInfo__width}>Quantity</div>
                            <div className={styles.sectionInfo__quantity_control}>
                                <div className={styles.sectionInfo__quantity}>{quantity}</div>
                                <div className={styles.flex__control}>
                                    <Button type={ButtonType.White} imageClassName={'icon-minus'} click={quantityMinus} disable={quantity === 1} />
                                    <div className={styles.btnMargin}>
                                        <Button type={ButtonType.White} imageClassName={'icon-plus'} click={()=>setQuantity(quantity + 1)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Description</div>
                        <div className={styles.sectionInfo__text}>AZEK American Walnut Boards are available in both a "solid" (also called square shouldered) and "grooved" profiles. Install main deck with Grooved boards using CONCEALoc hidden fasteners. Use Solid boards for deck perimeter picture framing and steps using color matching Face fastening screws or Screws with plugs.</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Board Profile</div>
                        <div className={styles.sectionInfo__text}>Grooved / Solid / Fascia</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Grooved Boards' Length</div>
                        <div className={styles.sectionInfo__text}>12' / 16' / 20'</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Solid Boards' Length</div>
                        <div className={styles.sectionInfo__text}>16' / 20'</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Material</div>
                        <div className={styles.sectionInfo__text}>Capped Celular PVC</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Joists structure</div>
                        <div className={styles.sectionInfo__text}>16"-on-centre for straight applications; 12"-on-centre for diagonal applications</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <CarouselComponent special='Related products' title='Frequently bought with' badgeSecondary products={products}/>
        </div>
    </div>
}