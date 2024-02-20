import cn from 'clsx'
import styles from './AddressBookContainer.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import AddressBook from "../AddressBook/AddressBook";

export default function AddressBookContainer() {
	return <div className={styles.address}>
		<AccountCardWrapperPrimary
				title={<div className={styles.address__title}>
					<div className={cn('icon-house', styles.address__iconTitle)}/>Additional shipping addresses
				</div>}
				buttonText={'Edit both addresses'}
				buttonIcon={'icon-pencil'}
		>
			<AddressBook/>
		</AccountCardWrapperPrimary>
		<div className={styles.address__middleWrapContainer}>
			<AccountCardWrapperPrimary
					title={
				<div className={styles.address__title}>
					<div className={cn('icon-truck', styles.address__iconTitle)}/>Additional shipping addresses
				</div>
			}
					buttonText={'Add new shipping address'}
					buttonIcon={'icon-plus'}>
				<div className={styles.address__add}>You have no other shipping address entries in your address book.</div>
			</AccountCardWrapperPrimary>
		</div>
		<AccountCardWrapperPrimary
				title={
					<div className={styles.address__title}>
						<div className={cn('icon-card', styles.address__iconTitle)}/>Additional shipping addresses
					</div>
				}
				buttonText={'Add new billing address'}
				buttonIcon={'icon-plus'}
		>
			<div className={styles.address__add}>You have no other billing address entries in your address book.</div>
		</AccountCardWrapperPrimary>
	</div>
}