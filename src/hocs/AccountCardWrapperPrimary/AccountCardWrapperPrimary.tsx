import cn from 'clsx'
import styles from './AccountCardWrapperPrimary.module.scss'
import {ReactElement} from "react";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";

interface IProp {
	title: string;
	buttonText: string;
	buttonIcon?: string;
	buttonIconSize?: number;
	buttonLink?: string;
	children: ReactElement;
	childrenTable?: boolean;
}

export default function AccountCardWrapperPrimary({
																										title,
																										buttonText,
																										buttonLink,
																										buttonIcon,
																										children,
																										buttonIconSize,
																										childrenTable = false
	}:IProp) {

	return <div className={styles.wrapper}>
		<div className={styles.wrapper__title}>
			{title}
		</div>
		<div className={cn(childrenTable? styles.wrapper__childrenTable : styles.wrapper__children)}>{children}</div>
		<div>
			<div className={styles.wrapper__btn}>
				<Button text={buttonText} type={ButtonType.Blue} imageClassName={buttonIcon} fontSize={buttonIconSize} link={buttonLink}/>
			</div>
		</div>
	</div>
}