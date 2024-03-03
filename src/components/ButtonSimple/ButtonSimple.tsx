import cn from 'clsx'
import styles from './ButtonSimple.module.scss'
import {ButtonSimpleType} from "../../shared/types/ButtonTypes";
import {Link} from "react-router-dom";

interface IProp {
	text?: string;
	fontSize?: number;
	type: ButtonSimpleType;
	imageClassName?: string;
	subTitle?: string;
	link?: string;
	href?: string;
	click?: ()=> void;
}

export default function ButtonSimple({text, type, imageClassName, fontSize, link, href, click, subTitle}: IProp) {
	if(link) {
		return <Link
			to={link}
			className={cn(styles.buttonSimple,
				type === ButtonSimpleType.small && styles.buttonSimple__small,
				type === ButtonSimpleType.large && styles.buttonSimple__large)}>
			{text && <div>
          <div className={styles.buttonSimple__text}>{text}</div>
				{subTitle && <div className={styles.buttonSimple__subTitle}>{subTitle}</div>}
      </div>}
			{imageClassName && <div className={cn(imageClassName, styles.buttonSimple__icon)} style={{fontSize: `${fontSize}px`}}/>}
		</Link>
	}
	return <button
		onClick={click}
		className={cn(styles.buttonSimple,
		type === ButtonSimpleType.small && styles.buttonSimple__small,
		type === ButtonSimpleType.large && styles.buttonSimple__large)}>
		{text && <div>
				<div className={styles.buttonSimple__text}>{text}</div>
			{subTitle && <div className={styles.buttonSimple__subTitle}>{subTitle}</div>}
		</div>}
		{imageClassName && <div className={cn(imageClassName, styles.buttonSimple__icon)} style={{fontSize: `${fontSize}px`}}/>}
	</button>
}