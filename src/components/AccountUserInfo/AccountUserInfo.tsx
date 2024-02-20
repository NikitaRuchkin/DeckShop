import styles from './AccountUserInfo.module.scss'

interface IProp {
	name?: string;
	lastName?: string;
	address?: string;
	phoneNumber?: string;
}

export default function AccountUserInfo({name, lastName, address, phoneNumber}: IProp) {
	return <div>
		{name && <div className={styles.accountUserInfo__info}>
			<div className={styles.accountUserInfo__info_text}>First name</div>
			<div className={styles.accountUserInfo__info_value}>{name}</div>
		</div>}
		{lastName && <div className={styles.accountUserInfo__info}>
			<div className={styles.accountUserInfo__info_text}>Last name</div>
			<div className={styles.accountUserInfo__info_value}>{lastName}</div>
		</div>}
		{address && <div className={styles.accountUserInfo__info}>
			<div className={styles.accountUserInfo__info_text}>Address</div>
			<div className={styles.accountUserInfo__info_value}>{address}</div>
		</div>}
		{phoneNumber && <div className={styles.accountUserInfo__info}>
			<div className={styles.accountUserInfo__info_text}>Phone number</div>
			<div className={styles.accountUserInfo__info_value}>+1 {phoneNumber}</div>
		</div>}
	</div>
}