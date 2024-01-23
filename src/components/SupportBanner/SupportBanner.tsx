import styles from './SupportBanner.module.scss'
import cn from 'clsx'

interface IProp {
	title: string;
	text: string;
}

export default function SupportBanner({title, text}:IProp) {
	return <div className={styles.supportBanner}>
		<div className={styles.supportBanner__block}>
			<div className={cn('icon-shield', styles.supportBanner__icon)}/>
			<div>
				<div className={styles.supportBanner__title}>{title}</div>
				<div className={styles.supportBanner__additionalText}>{text}</div>
			</div>
		</div>
	</div>
}