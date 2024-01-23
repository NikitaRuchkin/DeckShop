import styles from './AddressBookContainer.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import AddressBook from "../AddressBook/AddressBook";

export default function AddressBookContainer() {
	return <div>
		<AccountCardWrapperPrimary title={'Account information'} buttonText={'Edit contact information'}>
			<AddressBook/>
		</AccountCardWrapperPrimary>
		<AccountCardWrapperPrimary title={'Account information'} buttonText={'Edit contact information'}>
			<div className={styles.address__add}>You have no other address entries in your address book.</div>
		</AccountCardWrapperPrimary>
	</div>
}