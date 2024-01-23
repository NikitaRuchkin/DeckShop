import styles from './BadgeSimple.module.scss'
import cn from "clsx";

interface IProp {
	text: string;
	blue: boolean;
}

export default function BadgeSimple({text, blue}: IProp) {
	return <div className={cn(styles.mainContainer, blue? styles.blue : styles.black)}>
		<div className={styles.text}>{text}</div>
	</div>
}