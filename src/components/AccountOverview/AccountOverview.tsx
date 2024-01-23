import styles from './AccountOverview.module.scss'
import cn from 'clsx'
import AccountInformation from "../AccountInformation/AccountInformation";
import AddressBook from "../AddressBook/AddressBook";
import RecentOrders from "../RecentOrders/RecentOrders";
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";

export default function AccountOverview() {
	return <div>
		<AccountCardWrapperPrimary title={'Account information'} buttonText={'Edit contact information'}>
			<AccountInformation/>
		</AccountCardWrapperPrimary>
		<div className={styles.margin}>
			<AccountCardWrapperPrimary title={'Default address'} buttonText={'Manage addresses'}>
				<AddressBook/>
			</AccountCardWrapperPrimary>
		</div>
		<div className={cn(styles.margin, styles.marginFooter)}>
			<AccountCardWrapperPrimary title={'Recent orders'} buttonText={'View all orders'} childrenTable>
				<RecentOrders/>
			</AccountCardWrapperPrimary>
		</div>
	</div>
}