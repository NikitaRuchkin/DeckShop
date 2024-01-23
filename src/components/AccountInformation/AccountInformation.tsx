import cn from 'clsx'
import styles from './AccountInformation.module.scss'
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../button/Button";
import {useState} from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function AccountInformation() {
  const [showPassword, setShowPassword] = useState(true)
  return <div>
    <div className={styles.accountInformation__infoContainer}>
      <div>
        <div className={styles.accountInformation__semiTitle}>Contact information</div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Name</div>
          <div className={styles.accountInformation__editableFields}>Igor Yashkin</div>
        </div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Email</div>
          <div className={styles.accountInformation__editableFields}>igor.uix@gmail.com</div>
        </div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Phone number</div>
          <div className={styles.accountInformation__editableFields}>1234567890</div>
        </div>
        <div className={cn(styles.accountInformation__infoBlock, styles.accountInformation__borderBottom)}>
          <div className={styles.accountInformation__text}>Password</div>
          <div className={styles.accountInformation__editableFields}>
            {showPassword?
                <div className={styles.password}>qwerty</div>
                :
                <div className={styles.password}>••••••••••••••••</div>
            }
            <div className={cn(showPassword? 'icon-slashed-eye' : 'icon-eye', styles.icon)} onClick={()=>setShowPassword(!showPassword)}/>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.accountInformation__semiTitle}>Email preferences</div>
        <div className={styles.accountInformation__infoBlock}>
          <div className={styles.accountInformation__text}>Order and status to updates</div>
          <div><Checkbox /></div>
        </div>
        <div className={cn(styles.accountInformation__infoBlock, styles.accountInformation__borderBottom)}>
          <div className={styles.accountInformation__text}>Subscribe to newsletter</div>
          <div>
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  </div>
}