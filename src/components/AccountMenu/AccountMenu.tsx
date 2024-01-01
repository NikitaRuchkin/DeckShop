import cn from 'clsx'
import styles from './AccountMenu.module.scss'

export default function AccountMenu() {
  return <div className={styles.mainContainer}>
    <div className={styles.menu}>Menu</div>
    <div className={styles.flexBox}>
      <div className={cn(styles.icon, 'icon-user')}/>
      <div className={styles.text}>Account overview</div>
    </div>
    <div className={styles.flexBox}>
      <div className={cn(styles.icon, 'icon-history')}/>
      <div className={styles.text}>Order history</div>
    </div>
    <div className={styles.flexBox}>
      <div className={cn(styles.icon, 'icon-book')}/>
      <div className={styles.text}>Address book</div>
    </div>
    <div className={styles.flexBox}>
      <div className={cn(styles.icon, 'icon-card')}/>
      <div className={styles.text}>Stored payment methods</div>
    </div>
    <div className={styles.flexBox}>
      <div className={cn(styles.icon, 'icon-user-info')}/>
      <div className={styles.text}>Account information</div>
    </div>
  </div>
}