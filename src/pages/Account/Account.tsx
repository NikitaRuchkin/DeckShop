import styles from './Account.module.scss'
import AccountMenu from "../../components/AccountMenu/AccountMenu";
import React from "react";
import {Route, Routes} from "react-router-dom";
import AccountOverview from "../../components/AccountOverview/AccountOverview";
import AddressBookContainer from "../../components/AddressBookContainer/AddressBookContainer";

//TODO check font-family of account__info (There was Arial Nova)
export default function Account() {
  return <div className={styles.mainContainer}>
    <div className={styles.account__userName}>Good day, Igor!</div>
    <div className={styles.account__info}>This is your account page. All relevant information about orders, payments, and personal data is here.</div>
    <div className={styles.account__routes}>
      <div><AccountMenu/></div>
      <div className={styles.account__routes__marginLeft}>
        <Routes>
          <Route  path={'/'} element={<AccountOverview/>}/>
          <Route  path={'/orderHistory'} element={<div>321</div>}/>
          <Route  path={'/addressBook'} element={<AddressBookContainer/>}/>
          {/*<Route  path={'/addressBook'} element={<CheckoutProcess step={1}/>}/>*/}
          {/*<Route  path={'/addressBook'} element={<CheckoutProcess step={1}/>}/>*/}
          {/*<Route  path={'/addressBook'} element={<CheckoutProcess step={1}/>}/>*/}
        </Routes>
      </div>
    </div>
  </div>
}