import styles from './AcceptModal.module.scss'
import {Modal} from "@mui/material";
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

interface IProp {
	open: boolean;
	closeFn: ()=> void;
	text: string;
	title: string;
	acceptBtnText: string;
	cancelBtnText: string;
	acceptFn?: ()=> void;
	remove?: boolean;
}

export default function AcceptModal({open, acceptBtnText, cancelBtnText, text, closeFn, title, remove = false, acceptFn}:IProp) {
	return 		<Modal
			open={open}
			onClose={closeFn}
	>
		<div className={styles.modal__position}>
			<div className={styles.modal__container}>
				<div className={styles.modal__title}>{title}</div>
				<div className={styles.modal__text}>{text}</div>
				<div className={styles.modal__btnContainer}>
					{remove && <Button text={acceptBtnText} type={ButtonType.Red} imageClassName='icon-bin' click={acceptFn} />}
					{!remove && <Button text={acceptBtnText} type={ButtonType.Blue} imageClassName='icon-check' click={acceptFn} />}
					<Button text={cancelBtnText} type={ButtonType.White} imageClassName='icon-cross' click={closeFn} />
				</div>
			</div>
		</div>
	</Modal>
}