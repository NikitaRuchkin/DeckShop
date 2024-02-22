import {useState} from "react";
import cn from 'clsx'
import styles from './AddressBookContainer.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import AddressBook from "../AddressBook/AddressBook";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getUserInfoState} from "../../store/reducers/user/UserReducer";
import AddingDefaultAddressesModal from "../../Modals/AddingDefaultAddressesModal/AddingDefaultAddressesModal";
import BillingAddressModal from "../../Modals/BillingAddressModal/BillingAddressModal";

export default function AddressBookContainer() {
	const user = useSelector((state: RootState)=>getUserInfoState(state.UserReducer))
	const [open, setOpen] = useState(false);
	const [openEditBoth, setOpenEditBoth] = useState(false)
	const [openBilling, setOpenBilling] = useState(false);
	const [openShipping, setOpenShipping] = useState(false);
	const handleOpenBilling = () => setOpenBilling(true);
	const handleCloseBilling = () => setOpenBilling(false);
	const handleOpenShipping = () => setOpenShipping(true);
	const handleCloseShipping = () => setOpenShipping(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleOpenEditBoth = () => setOpenEditBoth(true);
	const handleCloseEditBoth = () => setOpenEditBoth(false);

	return <div className={styles.address}>

		{user.address && <AccountCardWrapperPrimary
        title={<div className={styles.address__title}>
					<div className={cn('icon-house', styles.address__iconTitle)}/>
					Additional shipping addresses
				</div>}
        buttonText={'Edit both addresses'}
        buttonIcon={'icon-pencil'}
				click={handleOpenEditBoth}
    >
        <AddressBook/>
    </AccountCardWrapperPrimary>
		}

		{!user.address && <AccountCardWrapperPrimary
        title={<div className={styles.address__title}>
					<div className={cn('icon-house', styles.address__iconTitle)}/>
					Default addresses
				</div>}
        buttonText={'Add new address'}
        buttonIcon={'icon-plus'}
				click={handleOpen}
    >
        <div className={styles.address__add}>You have not added any addresses to your address book yet.</div>
    </AccountCardWrapperPrimary>
		}

		<div className={styles.address__middleWrapContainer}>
			<AccountCardWrapperPrimary
					title={
				<div className={styles.address__title}>
					<div className={cn('icon-truck', styles.address__iconTitle)}/>Additional shipping addresses
				</div>
			}
					click={handleOpenShipping}
					disable={!user.address}
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
				click={handleOpenBilling}
				disable={!user.address}
				buttonText={'Add new billing address'}
				buttonIcon={'icon-plus'}
		>
			<div className={styles.address__add}>You have no other billing address entries in your address book.</div>
		</AccountCardWrapperPrimary>

		<AddingDefaultAddressesModal open={open} closeFn={handleClose}/>
		<AddingDefaultAddressesModal open={openEditBoth} closeFn={handleCloseEditBoth} edit/>
		<BillingAddressModal  closeFn={handleCloseBilling} open={openBilling} edit={false} billing/>
		<BillingAddressModal closeFn={handleCloseShipping} open={openShipping} edit={false} billing={false}/>
	</div>
}