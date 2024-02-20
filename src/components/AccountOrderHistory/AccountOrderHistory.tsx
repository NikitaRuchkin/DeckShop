import cn from "clsx";
import styles from './AccountOrderHistory.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import RecentOrders from "../RecentOrders/RecentOrders";

export default function AccountOrderHistory() {
	return <div className={styles.AccountOrderHistory}>
		<AccountCardWrapperPrimary title={
			<div className={styles.AccountOrderHistory__wrapperText}>
				<div className={cn(styles.AccountOrderHistory__wrapper, 'icon-history')}/>Recent orders</div>
		} marginNone classNameContainer={styles.AccountOrderHistory__wrapperClassName}>
			<RecentOrders/>
		</AccountCardWrapperPrimary>
	</div>
}