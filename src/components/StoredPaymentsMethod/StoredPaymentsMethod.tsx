import cn from "clsx";
import styles from './StoredPaymentsMethod.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import CardDesign from "../CardDesign/CardDesign";

export default function StoredPaymentsMethod() {
	return <div>
		<AccountCardWrapperPrimary
				title={<div className={styles.StoredPaymentsMethod__title}>
					<div className={cn('icon-house', styles.StoredPaymentsMethod__iconTitle)}/>Additional shipping addresses
				</div>}
				buttonText={'Delete method'}
				buttonIcon={'icon-bin'}
				redButton
		>
			<CardDesign />
		</AccountCardWrapperPrimary>
		<div className={styles.StoredPaymentsMethod__addCardContainer}>
			<AccountCardWrapperPrimary
					title={
						<div className={styles.StoredPaymentsMethod__title}>
							<div className={cn('icon-2-cards', styles.StoredPaymentsMethod__iconTitle)}/>Additional payment methods
						</div>
					}
					buttonText={'Add new billing address'}
					buttonIcon={'icon-plus'}
			>
				<div className={styles.StoredPaymentsMethod__add}>You have no other shipping address entries in your address book.</div>
			</AccountCardWrapperPrimary>
		</div>
	</div>
}