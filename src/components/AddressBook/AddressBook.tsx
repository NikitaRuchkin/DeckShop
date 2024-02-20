import styles from './AddressBook.module.scss'
import cn from "clsx";
import AccountUserInfo from "../AccountUserInfo/AccountUserInfo";

export default function AddressBook() {
  return <div>
    <div>
      <div className={styles.accountInfo__title}>
        <div className={styles.accountInfo__title__titleContainer}>
          <div className={cn('icon-truck', styles.accountInfo__title__icon)}/>
          <div className={styles.accountInfo__title__text}>Shipping address</div>
        </div>
        <div className={cn(styles.accountInfo__title__iconEdit, 'icon-pencil')}/>
      </div>
      <AccountUserInfo name={'Igor'} lastName={'Yashkin'} address={'West Road 1234, Toronto, Ontario, Canada'} phoneNumber={'234567890'} />
    </div>
    <div className={styles.accountInfo__billingContainer}>
      <div className={styles.accountInfo__title}>
        <div className={styles.accountInfo__title__titleContainer}>
          <div className={cn('icon-card', styles.accountInfo__title__icon)}/>
          <div className={styles.accountInfo__title__text}>Billing address</div>
        </div>
        <div className={cn(styles.accountInfo__title__iconEdit, 'icon-pencil')}/>
      </div>
      <AccountUserInfo name={'Igor'} lastName={'Yashkin'} address={'West Road 1234, Toronto, Ontario, Canada'} phoneNumber={'234567890'} />
    </div>
  </div>
}