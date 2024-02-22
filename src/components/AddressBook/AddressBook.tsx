import styles from './AddressBook.module.scss'
import cn from "clsx";
import AccountUserInfo from "../AccountUserInfo/AccountUserInfo";
import {useState} from "react";
import BillingAddressModal from "../../Modals/BillingAddressModal/BillingAddressModal";

export default function AddressBook() {
  const [openBilling, setOpenBilling] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  const handleOpenBilling = () => setOpenBilling(true);
  const handleCloseBilling = () => setOpenBilling(false);
  const handleOpenShipping = () => setOpenShipping(true);
  const handleCloseShipping = () => setOpenShipping(false);

  return <div>
    <div>
      <div className={styles.accountInfo__title}>
        <div className={styles.accountInfo__title__titleContainer}>
          <div className={cn('icon-truck', styles.accountInfo__title__icon)}/>
          <div className={styles.accountInfo__title__text}>Shipping address</div>
        </div>
        <div className={cn(styles.accountInfo__title__iconEdit, 'icon-pencil')} onClick={handleOpenShipping}/>
      </div>
      <AccountUserInfo name={'Igor'} lastName={'Yashkin'} address={'West Road 1234, Toronto, Ontario, Canada'} phoneNumber={'234567890'} />
    </div>
    <div className={styles.accountInfo__billingContainer}>
      <div className={styles.accountInfo__title}>
        <div className={styles.accountInfo__title__titleContainer}>
          <div className={cn('icon-card', styles.accountInfo__title__icon)}/>
          <div className={styles.accountInfo__title__text}>Billing address</div>
        </div>
        <div className={cn(styles.accountInfo__title__iconEdit, 'icon-pencil')} onClick={handleOpenBilling}/>
      </div>
      <AccountUserInfo name={'Igor'} lastName={'Yashkin'} address={'West Road 1234, Toronto, Ontario, Canada'} phoneNumber={'234567890'} />
    </div>
    <BillingAddressModal  closeFn={handleCloseBilling} open={openBilling} edit billing/>
    <BillingAddressModal closeFn={handleCloseShipping} open={openShipping} edit billing={false}/>
  </div>
}