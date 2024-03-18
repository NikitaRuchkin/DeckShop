import styles from './ConfirmEmail.module.scss'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import StepContainer from "../../components/StepContainer/StepContainer";
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {useDispatch} from "react-redux";

export default function ConfirmEmail() {
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();
	
	const [disable, setDisable] = useState(false)
	
	const sendEmailConfirm = () => {
		setDisable(true)
		// dispatch()
		setDisable(false)
	}
	
	return <div className={styles.mainContainer}>
		<div className={styles.confirmPass__title}>Creating new account</div>
		<div className={styles.confirmPass__container}>
			<div className={styles.confirmPass__textContainer}>
				<div className={styles.confirmPass__textContainer__title}>Confirm your email</div>
				<div className={styles.confirmPass__textContainer__text}>We have sent a confirmation link to your email address. Follow the link to complete the registration.</div>
				<Button text={'Resend code'} disable={disable} imageClassName={'icon-redo'} type={ButtonType.Blue} click={sendEmailConfirm}/>
			</div>
			<StepContainer step={2} large textFirst='Account details'  textSecond='Email confirmation' title='Registration process'/>
		</div>
	</div>
}