import styles from './CheckoutThird.module.scss'
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";
import CartMini from "../../components/cartMini/CartMini";
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

export default function CheckoutThird() {
	return <div className={styles.mainContainer}>
		<div className={styles.checkoutFinish}>Checkout</div>
		<div className={styles.checkoutFlex}>

			<div><CheckoutProcess step={3} medium/></div>
			<div className={styles.checkoutFinish__fields}>
				<div className={styles.checkoutFinish__title}>Payment method</div>
				<div className={styles.checkoutFinish__numberText}>
					Your order number is <span className={styles.checkoutFinish__number}>000000002</span>.
					<br/>
					We sent you an email with order confirmation and tracking information.
				</div>
				<div className={styles.checkoutFinish__buttonContainer}>
					<Button type={ButtonType.White} link={'/'} text='Continue to website'/>
					<Button type={ButtonType.Grey} link={'/'} text='Print receipt' imageClassName='icon-printer'/>
				</div>
			</div>
			<div><CartMini extended/></div>
		</div>
	</div>
}