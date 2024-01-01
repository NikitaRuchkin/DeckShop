import styles from './Account.module.scss'
import AccountMenu from "../../components/AccountMenu/AccountMenu";


//TODO check font-family of account__info (There was Arial Nova)
export default function Account() {
  return <div className={styles.mainContainer}>
    <div className={styles.account__userName}>Good day, Igor!</div>
    <div className={styles.account__info}>This is your account page. All relevant information about orders, payments, and personal data is here.</div>
    <div className={styles.account__routes}>
      <div><AccountMenu/></div>
      <div></div>
    </div>
  </div>
}