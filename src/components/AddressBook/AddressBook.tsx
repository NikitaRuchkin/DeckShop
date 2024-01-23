import styles from './AddressBook.module.scss'
import cn from "clsx";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

export default function AddressBook() {
  return <div>
    <div className={styles.accountInformation__infoContainer}>
      <div>
        <div className={styles.accountInformation__semiTitle}>Billing address</div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Name</div>
          <div className={styles.accountInformation__editableFields}>Igor Yashkin</div>
        </div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Address</div>
          <div className={styles.accountInformation__editableFields}>1234 West Road
            <br/>
            Toronto, Ontario M1T 3P1
            <br/>
            Canada</div>
        </div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Phone number</div>
          <div className={styles.accountInformation__editableFields}>1234567890</div>
        </div>
      </div>
      <div>
        <div className={styles.accountInformation__semiTitle}>Shipping address</div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Name</div>
          <div className={styles.accountInformation__editableFields}>Igor Yashkin</div>
        </div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Address</div>
          <div className={styles.accountInformation__editableFields}>1234 West Road
            <br/>
            Toronto, Ontario M1T 3P1
            <br/>
            Canada</div>
        </div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Phone number</div>
          <div className={styles.accountInformation__editableFields}>1234567890</div>
        </div>
      </div>
    </div>
  </div>
}