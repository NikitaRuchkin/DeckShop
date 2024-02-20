import cn from 'clsx'
import styles from './AccountMenu.module.scss'
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteToken} from '../../store/reducers/user/UserReducer'

export default function AccountMenu() {
  const location = useLocation()
  const dispatch = useDispatch()
  // const checkCaps = (event: any) => {
  //   if (event.getModifierState("CapsLock")) {
  //     console.log('CAPS')
  //   } else {
  //     console.log('no caps')
  //   }
  // }
  return <div className={styles.mainContainer}>
    <div className={styles.menu}>Menu</div>
    <Link to={'/account'} className={styles.flexBox}>
      <div className={cn(styles.icon, location.pathname === '/account' && styles.textActive, 'icon-user')}/>
      <div className={cn(styles.text, location.pathname === '/account' && styles.textActive)}>Account overview</div>
    </Link>
    <Link to={'/account/orderHistory'} className={styles.flexBox}>
      <div className={cn(styles.icon, location.pathname === '/account/orderHistory' && styles.textActive, 'icon-history')}/>
      <div className={cn(styles.text, location.pathname === '/account/orderHistory' && styles.textActive)}>Order history</div>
    </Link>
    <Link to={'/account/addressBook'} className={styles.flexBox}>
      <div className={cn(styles.icon, location.pathname === '/account/addressBook' && styles.textActive, 'icon-book')}/>
      <div className={cn(styles.text, location.pathname === '/account/addressBook' && styles.textActive)}>Address book</div>
    </Link>
    <Link to={'/account/paymentMethod'} className={styles.flexBox}>
      <div className={cn(styles.icon, location.pathname === '/account/paymentMethod' && styles.textActive, 'icon-card')}/>
      <div className={cn(styles.text, location.pathname === '/account/paymentMethod' && styles.textActive)}>Stored payment methods</div>
    </Link>
    <Link to={'/account/accountInfo'} className={styles.flexBox}>
      <div className={cn(styles.icon, location.pathname === '/account/accountInfo' && styles.textActive, 'icon-user-info')}/>
      <div className={cn(styles.text, location.pathname === '/account/accountInfo' && styles.textActive)}>Account information</div>
    </Link>
    <Link to={'/'} className={styles.flexBox} onClick={()=> dispatch(deleteToken())}>
      <div className={cn(styles.icon, styles.textRed, 'icon-log-out')}/>
      <div className={cn(styles.text, styles.textRed)}>Log out</div>
    </Link>
  </div>
}