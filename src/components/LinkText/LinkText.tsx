import styles from './LinkText.module.scss'
import {Link} from "react-router-dom";

interface IProp {
	to: string;
	text: string;
}

export default function LinkText({to, text}: IProp) {
	return <Link to={to} className={styles.link}>
		{text}
	</Link>
}