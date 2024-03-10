import styles from './OrderSummary.module.scss'
import defaultImage from "../../assets/imgPng/5.png";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../button/Button";

interface IProp {
  subtotal: number;
  grandTotal: number;
}

export default function OrderSummary({subtotal, grandTotal}: IProp) {
  return <div className={styles.mainContainer}>
    <div className={styles.cartMini__title}>Summary</div>
    <div className={styles.orderSubtotal}>
      <div className={styles.order__textThin}>Subtotal</div>
      <div className={styles.order__textRegular}>${subtotal}</div>
    </div>
    <div className={styles.orderShipping}>
      <div className={styles.order__textThin}>Shipping (fixed rate)</div>
      <div className={styles.order__textRegular}>TBD</div>
    </div>
    <div className={styles.cartSubtotal}>
      <div className={styles.cartSubtotal__text}>Order subtotal</div>
      <div className={styles.cartSubtotal__price}>${grandTotal}*</div>
    </div>
    <div className={styles.btn}>
      <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='Proceed to checkout'/>
    </div>
    <div className={styles.advice}>*Shipping will affect the total price</div>
  </div>
}