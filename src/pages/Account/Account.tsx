import styles from './Account.module.scss'
import AccountMenu from "../../components/AccountMenu/AccountMenu";
import React from "react";
import {Route, Routes} from "react-router-dom";
import AccountOverview from "../../components/AccountOverview/AccountOverview";
import AddressBookContainer from "../../components/AddressBookContainer/AddressBookContainer";
import AccountOrderHistory from "../../components/AccountOrderHistory/AccountOrderHistory";
import StoredPaymentsMethod from "../../components/StoredPaymentsMethod/StoredPaymentsMethod";
import AccountInformation from "../../components/AccountInformation/AccountInformation";

export default function Account() {
  return <div className={styles.mainContainer}>
    <div className={styles.account__userName}>Good day, Igor!</div>
    <div className={styles.account__info}>This is your account page. All relevant information about orders, payments, and personal data is here.</div>
    <div className={styles.account__routes}>
      <div><AccountMenu/></div>
      <div className={styles.account__routes__marginLeft}>
        <Routes>
          <Route  path={'/'} element={<AccountOverview/>}/>
          <Route  path={'/orderHistory'} element={<AccountOrderHistory/>}/>
          <Route  path={'/addressBook'} element={<AddressBookContainer/>}/>
          <Route  path={'/paymentMethod'} element={<StoredPaymentsMethod/>}/>
          <Route  path={'/accountInfo'} element={<AccountInformation/>}/>
        </Routes>
      </div>
    </div>
  </div>
}