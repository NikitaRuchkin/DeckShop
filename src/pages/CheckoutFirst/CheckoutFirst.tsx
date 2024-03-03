import cn from 'clsx'
import styles from './CheckoutFirst.module.scss'
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";
import CartMini from "../../components/cartMini/CartMini";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";
import Field from "../../components/field/field";
import RadioField from "../../components/RadioField/RadioField";
import {useState} from "react";

export default function CheckoutFirst() {
  const [userExists, setUserExists] = useState(false)

  return <div className={styles.mainContainer}>
    <div className={styles.checkout}>Checkout</div>
    <div className={styles.checkoutFlex}>
      <div><CheckoutProcess step={1} medium/></div>
      <div className={styles.checkout__fields}>
        <div>
          <div className={cn(styles.checkout__title, styles.field__marginTopZero)}>{userExists? 'Client information' : 'Account information'}</div>
          {!userExists && <div className={styles.field__container}>
            <div className={styles.field__placeHolder}>Email address</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your email' onChange={() => {
            }}/>
          </div>}
          {userExists && <div>
            <div className={styles.field__info}>
              <div className={cn('icon-user', styles.field__infoIcon)}/>
              <div className={styles.field__infoText}>
                The email you entered belongs to an existing account. Sign in or enter a different email address to continue as guest.
              </div>
            </div>
            <div className={cn(styles.field__container, styles.field__smallMarg)}>
              <div className={styles.field__placeHolder}>Email address</div>
              <Field name={'name'} type={'text'} placeHolder='Enter your email' onChange={() => {}}/>
            </div>
            <div className={cn(styles.field__container, styles.field__smallMarg)}>
              <div className={styles.field__placeHolder}>Password</div>
              <Field name={'name'} type={'text'} placeHolder='Enter your password' onChange={() => {}}/>
            </div>
            <div className={styles.field__recoveryContainer}>
              <Button type={ButtonType.Blue} text='Log in' imageClassName='icon-arrow-right' click={()=>{}}/>
              <div className={styles.field__recovery}>Password recovery</div>
            </div>
          </div>}

          <div className={styles.checkout__title}>Personal information</div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>First name</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your name' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Last name</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your last name' onChange={()=>{}}/>
          </div>

          <div className={styles.checkout__title}>Shipping address</div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Country</div>
            <Field name={'name'} type={'text'} placeHolder='Canada' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>City</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your city' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Street</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your street' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Province</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your province' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Address line 1</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Address line 2</div>
            <Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}}/>
          </div>
          <div className={styles.field__smallContainer}>
            <div className={styles.field__placeHolder}>Phone number</div>
            <Field name={'name'} type={'text'} placeHolder='+1' onChange={()=>{}}/>
          </div>

          <div className={styles.checkout__title}>Shipping method</div>
          <div>
            <div className={styles.field__containerShip}>
              <div><RadioField change={()=>{}}/></div>
              <div className={styles.field__price}>$50.00</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>FedEx</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>2 business days</div>
            </div>
            <div className={styles.field__containerShip}>
              <div><RadioField change={()=>{}}/></div>
              <div className={styles.field__price}>$69.99</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>ArcBest</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>3-5 business days</div>
            </div>
            <div className={styles.field__containerShip}>
              <div><RadioField change={()=>{}}/></div>
              <div className={styles.field__price}>$200.00</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>Deckshop</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>7 business days</div>
            </div>
          </div>

          <div className={styles.btnMargin}>
            <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='To payment method' link={'/CheckoutSecond'}/>
          </div>

        </div>
      </div>
      <div><CartMini/></div>
    </div>
  </div>
}