import styles from './ValidatePassword.module.scss'
import cn from "clsx";

export default function ValidatePassword() {
	return <div>
		<div className={styles.password}>Password strength</div>
		<div>
			<div className={styles.password__line}/>
			{/*<div className={styles.password__line}/>*/}
			{/*<div className={styles.password__line}/>*/}
			{/*<div className={styles.password__line}/>*/}
		</div>
		<div className={styles.password__rulesContainer}>
			<div className={styles.password__rules_title}>
				<div className={cn('icon-lock', styles.password__rules_icon)}/>Password requirements:
			</div>
			<div>
				<div className={styles.password__rules_text}>
					<div className={cn('icon-placeholder', styles.password__rules_iconRule)}/>Must be greater than 8 characters.</div>
				<div className={styles.password__rules_text}>
					<div className={cn('icon-placeholder', styles.password__rules_iconRule)}/>Must contain uppercase letters.</div>
				<div className={styles.password__rules_text}>
					<div className={cn('icon-placeholder', styles.password__rules_iconRule)}/>Must contain numbers.</div>
			</div>
		</div>
	</div>
}