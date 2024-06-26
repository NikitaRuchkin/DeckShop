import cn from 'clsx'
import styles from './CheckoutSecond.module.scss'
import StepContainer from "../../components/StepContainer/StepContainer";
import CartMini from "../../components/cartMini/CartMini";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";
import CardDesign from "../../components/CardDesign/CardDesign";
import Checkbox from "../../components/Checkbox/Checkbox";
import Field from "../../components/field/field";
import {useState} from "react";


//TODO fix checkbox with useState
export default function CheckoutSecond() {
  const [billingSame, setBillingSame] = useState(true)
  return <div className={styles.mainContainer}>
    <div className={styles.checkout}>Checkout</div>
    <div className={styles.checkoutFlex}>

      <div><StepContainer step={2} medium textFirst='Shipping information'  textSecond='Payment method' textThird='Confirmation' title='Checkout process'/></div>
      <div className={styles.fields__extraLargeMarg}>
        <div className={styles.checkout__fields}>
          <div className={styles.fields__title}>Payment method</div>

          <div className={styles.fields__checkboxContainer}>
            <Checkbox change={setBillingSame} defaultValue={billingSame}/>
            <div className={styles.fields__checkboxText}>My shipping and billing addresses are the same</div>
          </div>
          <div>
            <Field name={'name'} type={'text'} placeHolder='Enter card number' title='Card number' onChange={()=>{}} />
          </div>
          <div className={styles.fields__cardInfoContainer}>
            <div className={styles.fields__fieldInfo}>
              <Field name={'name'} type={'text'} placeHolder='12/12' onChange={()=>{}} title='Expiration date'/>
            </div>
            <div className={styles.fields__fieldInfo}>
              <Field name={'name'} type={'text'} placeHolder='***' onChange={()=>{}} title='CVV'/>
            </div>
          </div>
          <div className={cn(styles.fields__smallMarg, billingSame && styles.fields__largeMarg)}>
            <Field name={'name'} type={'text'} placeHolder='Full name' title='Holder name' onChange={()=>{}} />
          </div>

          {!billingSame && <div>
            <div className={styles.fields__title}>Billing address</div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='Canada' title='Country' onChange={()=>{}} />
            </div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='Enter your name' title='First name' onChange={()=>{}} />
            </div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='+1' title='Phone number' onChange={()=>{}} />
            </div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='Enter your city' title='City' onChange={()=>{}} />
            </div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='Enter your province' title='Province' onChange={()=>{}} />
            </div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='Enter your address' title='Address line 1' onChange={()=>{}} />
            </div>
            <div className={styles.fields__mediumMarg}>
              <Field name={'name'} type={'text'} placeHolder='Enter your address' title='Address line 2' onChange={()=>{}} />
            </div>
          </div>}

          <div>
            {!billingSame && <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='Place order' link={'/checkoutThird'}/>}
            {billingSame && <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='Pay with this method' link={'/checkoutThird'}/>}
          </div>
        </div>

      </div>
      <div><CartMini extended/></div>

    </div>
  </div>
}