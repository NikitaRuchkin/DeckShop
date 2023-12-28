import styles from './CartMedium.module.scss'
import cn from 'clsx'
import defaultImage from '../../assets/imgPng/5.png'
import CircleButton from "../circleButton/CircleButton";
import React, {useState} from "react";

interface IProp {
  img: string,
  brand: string,
  name: string,
  amount: number,
  price: string,
  color: string,
  width: string,
  profile: string
}

export default function CartMedium(props: IProp) {
  const {img, amount, name, color, profile, width, price, brand} = props
  const [quantity, setQuantity] = useState(1)
  const quantityMinus = () => {
    if(quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }
  return <div className={styles.cartMedium}>
    <div>
      <img className={styles.cartMedium__img} src={img? img : defaultImage} alt='product'/>
    </div>
    <div className={styles.cartMedium__size}>
      <div className={cn(styles.cartMedium__flex, styles.flexBetween)}>
        <div className={styles.cartMedium__name}>
          <div className={styles.semiBlue}>{brand}</div>
          <div className={styles.blue}>{name}</div>
        </div>
        <div className={cn('icon-bin', styles.iconBin)}/>
      </div>
      <div className={styles.cartMedium__amount}>
        <div className={styles.cartMedium__quantity}>{quantity}</div>
        <div className={styles.cartMedium__flex}>
          <div className={styles.marginRight}>
            <CircleButton icon={'icon-minus'} click={quantityMinus} disabled={quantity === 1}/>
          </div>
          <CircleButton icon={'icon-plus'} click={()=>setQuantity(quantity + 1)}/>
        </div>
      </div>
      <div className={styles.cartMedium__properties}>
        <div className={styles.cartMedium__property}>
          <div>Color:&nbsp;</div>
          <div className={styles.cartMedium__property_regular}>{color}</div>
        </div>
        <div className={styles.cartMedium__property}>
          <div>Profile:&nbsp;</div>
          <div className={styles.cartMedium__property_regular}>{profile}</div>
        </div>
        <div className={styles.cartMedium__property}>
          <div>Width:&nbsp;</div>
          <div className={styles.cartMedium__property_regular}>{width}</div>
        </div>
      </div>
      <div className={styles.cartMedium__price}>${price}</div>
    </div>
  </div>
}