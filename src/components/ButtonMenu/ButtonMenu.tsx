import cn from 'clsx'
import styles from './ButtonMenu.module.scss'
import {ButtonSimpleType, ButtonType} from "../../shared/types/ButtonTypes";
import {Link} from "react-router-dom";

interface IProp {
	text?: string;
	fontSize?: number;
	type: ButtonType.Red | ButtonType.Blue;
	typeSize?: ButtonSimpleType;
	imageClassName?: string;
	link?: string;
	href?: string;
	click?: ()=> void;
	active?: boolean;
}

export default function ButtonMenu({link, href, click, imageClassName, fontSize, typeSize, type, text, active = false}: IProp) {
	if(link) {
		return <Link to={link}
								 className={cn(
										 styles.buttonMenu,
										 active? styles.buttonMenu__active : type === ButtonType.Red? null : styles.buttonMenu__default,
										 typeSize === ButtonSimpleType.small && styles.buttonMenu__small,
										 typeSize === ButtonSimpleType.large && styles.buttonMenu__large,
										 type === ButtonType.Red && styles.buttonMenu__red,
										 type === ButtonType.Blue && styles.buttonMenu__blue,
										 )}
		>
			{imageClassName && <div className={cn(imageClassName, styles.buttonMenu__icon)} style={{fontSize: `${fontSize}px`}}/>}
			{text && <div>{text}</div>}
		</Link>
	}
	return <button className={styles.buttonMenu}>
		{imageClassName && <div className={cn(imageClassName, styles.buttonMenu__icon)} style={{fontSize: `${fontSize}px`}}/>}
		{text && <div>{text}</div>}
	</button>
}