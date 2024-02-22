import cn from 'clsx'
import styles from './ButtonSimple.module.scss'
import {ButtonSimpleType} from "../../shared/types/ButtonTypes";
import {Link} from "react-router-dom";

interface IProp {
	text?: string;
	fontSize?: number;
	type?: ButtonSimpleType;
	imageClassName?: string;
	link?: string;
	href?: string;
	click?: ()=> void;
}

export default function ButtonSimple({text, type, imageClassName, fontSize, link, href, click}: IProp) {
	if(link) {
		return <Link to={link} className={styles.buttonSimple}>
			{text && <div>{text}</div>}
			{imageClassName && <div className={cn(imageClassName, styles.buttonSimple__icon)} style={{fontSize: `${fontSize}px`}}/>}
		</Link>
	}
	return <button className={styles.buttonSimple}>
		{text && <div>{text}</div>}
		{imageClassName && <div className={cn(imageClassName, styles.buttonSimple__icon)} style={{fontSize: `${fontSize}px`}}/>}
	</button>
}