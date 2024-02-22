import cn from 'clsx'
import styles from './ModalWrapper.module.scss'
import {ReactElement} from "react";
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

interface IProp {
	title?: string;
	titleIcon?: string;
	children: ReactElement;
	applyBtn?: boolean;
	applyText?: string;
	applyIcon?: string;
	applyDisable?: boolean;
	applyClick?: ()=> void;
	cancelBtn?: boolean;
	cancelText?: string;
	cancelIcon?: string;
	cancelDisable?: boolean;
	cancelClick?: ()=> void;
}

export default function ModalWrapper({
																			 title,
																			 titleIcon,
																			 children,
																			 cancelBtn = true,
																			 applyBtn = true,
																			 applyText,
																			 cancelText,
																			 applyIcon,
																			 cancelIcon,
																			 applyDisable,
																			 cancelDisable,
																			 cancelClick,
																			 applyClick
																			}: IProp) {
	return <div className={styles.modalWrap}>
		<div className={styles.modalWrap__title}>
			<div className={cn(titleIcon, styles.modalWrap__titleIcon)}/>
			<div>{title}</div>
		</div>
		<div>{children}</div>
		<div className={styles.modalWrap__btnContainer}>
			{cancelBtn && <Button
					type={ButtonType.Blue}
					text={applyText}
					imageClassName={applyIcon}
					disable={applyDisable}
					click={applyClick}
			/>}
			{applyBtn && <div className={styles.modalWrap__btnMargin}>
					<Button
					type={ButtonType.Red}
					text={cancelText}
					imageClassName={cancelIcon}
					disable={cancelDisable}
          click={cancelClick}
			/></div>}
		</div>
	</div>
}