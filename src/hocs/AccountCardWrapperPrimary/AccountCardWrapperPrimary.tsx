import cn from 'clsx'
import styles from './AccountCardWrapperPrimary.module.scss'
import {ReactElement} from "react";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";

interface IProp {
	title: string | ReactElement;
	buttonText?: string;
	buttonIcon?: string;
	buttonIconSize?: number;
	buttonLink?: string;
	children: ReactElement;
	childrenTable?: boolean;
	marginNone?: boolean;
	classNameContainer?: string;
	redButton?: boolean;
	disable?: boolean;
	click?: ()=> void;
}

export default function AccountCardWrapperPrimary({
																										title,
																										buttonText,
																										buttonLink,
																										buttonIcon,
																										children,
																										buttonIconSize,
																										childrenTable = false,
																										marginNone = false,
																										classNameContainer,
																										redButton = false,
																										disable = false,
																										click
	}:IProp) {

	return <div className={cn(styles.wrapper, classNameContainer && classNameContainer)}>
		<div className={styles.wrapper__title}>
			{title}
		</div>
		<div className={cn(childrenTable? styles.wrapper__childrenTable : styles.wrapper__children, marginNone && styles.wrapper__marginNone)}>{children}</div>
		{buttonText && !redButton && <div>
			<div className={styles.wrapper__btn}>
				<Button text={buttonText} type={ButtonType.Blue} imageClassName={buttonIcon} fontSize={buttonIconSize}
								link={buttonLink} click={click} disable={disable}/>
			</div>
		</div>}
		{buttonText && redButton && <div>
        <div className={styles.wrapper__btn}>
            <Button text={buttonText} type={ButtonType.Red} imageClassName={buttonIcon} fontSize={buttonIconSize}
                    link={buttonLink} click={click} disable={disable}/>
        </div>
    </div>}
	</div>
}