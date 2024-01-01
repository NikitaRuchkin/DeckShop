import cn from 'clsx'
import styles from './CheckoutSecond.module.scss'
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";
import CartMini from "../../components/cartMini/CartMini";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";
import CardDesign from "../../components/CardDesign/CardDesign";

export default function CheckoutSecond() {
  return <div className={styles.mainContainer}>
    <div className={styles.checkout}>Checkout</div>
    <div className={styles.checkoutFlex}>

      <div><CheckoutProcess step={2}/></div>
      <div>
        <div className={styles.checkout__fields}>
          <div className={styles.fields__title}>Default payment method</div>
          <CardDesign/>
          <div>
            <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='Proceed to checkout'/>
          </div>
        </div>
        <div className={styles.checkout__fields}>
          <div className={styles.fields__addTitle}>Additional payment methods</div>
          <div className={styles.fields__addText}>You have no other payment methods.</div>
          <div><Button text={'Add new method'} type={ButtonType.White} imageClassName={'icon-plus'} fontSize={16}/></div>
        </div>
      </div>
      <div><CartMini extended/></div>

    </div>
  </div>
}