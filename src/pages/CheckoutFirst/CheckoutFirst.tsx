import styles from './CheckoutFirst.module.scss'
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";
import CartMini from "../../components/cartMini/CartMini";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";
import Field from "../../components/field/field";

export default function CheckoutFirst() {
  return <div className={styles.mainContainer}>
    <div className={styles.checkout}>Checkout</div>
    <div className={styles.checkoutFlex}>
      <div><CheckoutProcess step={1}/></div>
      <div className={styles.checkout__fields}>
        <div>
          <div className={styles.checkout__title}>Account information</div>
          <div className={styles.field__container}>
            <div className={styles.field__placeHolder}>Email address</div>
            <Field placeHolder='Enter your email' onChange={()=>{}}/>
          </div>

          <div className={styles.checkout__title}>Personal information</div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>First name</div>
            <Field placeHolder='Enter your name' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Last name</div>
            <Field placeHolder='Enter your last name' onChange={()=>{}}/>
          </div>
          <div className={styles.field__container}>
            <div className={styles.field__placeHolder}>Phone number</div>
            <Field placeHolder='Enter your phone number' onChange={()=>{}}/>
          </div>

          <div className={styles.checkout__title}>Shipping address</div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Country</div>
            <Field placeHolder='Choose your country' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>City</div>
            <Field placeHolder='Select your city' onChange={()=>{}}/>
          </div>
          <div>
            <div className={styles.field__placeHolder}>Street</div>
            <Field placeHolder='Enter your street' onChange={()=>{}}/>
          </div>

          <div className={styles.btnMargin}>
            <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='Proceed to checkout'/>
          </div>

        </div>
      </div>
      <div><CartMini/></div>
    </div>
  </div>
}