import styles from './CheckoutProcess.module.scss'
import Steps from "../Steps/Steps";
import cn from "clsx";

interface IProp {
  step: number;
  large?: boolean;
  medium?: boolean;
}

export default function CheckoutProcess({step, large, medium}:IProp) {
  return <div className={cn(styles.checkout, medium && styles.checkout__medium, large && styles.checkout__large)}>
    <div className={styles.checkout__text}>Checkout process</div>
    <div>
      <Steps step={step} textFirst='Shipping information'  textSecond='Payment method' textThird='Confirmation'/>
    </div>
    <div className={cn(styles.bgIcon, medium && styles.bgMedium, large && styles.bgLarge, 'icon-circle')}/>
  </div>
}