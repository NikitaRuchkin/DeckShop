import styles from './CheckoutProcess.module.scss'
import Steps from "../Steps/Steps";
import cn from "clsx";

interface IProp {
  step: number;
}

export default function CheckoutProcess({step}:IProp) {
  return <div className={styles.checkout}>
    <div className={styles.checkout__text}>Checkout process</div>
    <div>
      <Steps step={step} textFirst='Shipping information'  textSecond='Payment method' textThird='Confirmation'/>
    </div>
    <div className={cn(styles.bgIcon, 'icon-circle')}/>
  </div>
}