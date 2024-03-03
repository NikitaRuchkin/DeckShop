import {Drawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { useForm } from "react-hook-form"
import {RootState} from "../../store/store";
import {getShowDrawer, setShowDrawer} from "../../store/reducers/RegisterDrawer/RegisterDrawer";
import styles from './RegisterDrawer.module.scss'
import Button from "../button/Button";
import {ButtonSimpleType, ButtonType} from "../../shared/types/ButtonTypes";
import Field from "../field/field";
import Checkbox from "../Checkbox/Checkbox";
import ButtonSimple from "../ButtonSimple/ButtonSimple";


export default function RegisterDrawer() {
	const showRegisterDrawer = useSelector((state: RootState)=>getShowDrawer(state))
	const dispatch = useDispatch()
	const setDrawer = ()=> {
		dispatch(setShowDrawer(false))
	}
	
	const { register, handleSubmit, setValue } = useForm({
		shouldUseNativeValidation: true,
	})
	const onSubmit = async (data: any) => {
		if(!data) {
			return
		}
		console.log(data)
		dispatch(setShowDrawer(false))
	}

	return <div>
		<Drawer
				style={{height: 'auto'}}
				anchor={'right'}
				open={showRegisterDrawer}
				onClose={setDrawer}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.registerDrawer}>
					<div className={styles.registerDrawer__header}>
						<div className={styles.registerDrawer__header_text}>Greetings!</div>
						<Button click={setDrawer} type={ButtonType.White} imageClassName={'icon-cross'} fontSize={16}/>
					</div>
					<div className={styles.registerDrawer__body}>
						<div className={styles.registerDrawer__body_title}>Log into existing account</div>
						<div className={styles.registerDrawer__body_form}>
							<Field
								name={'username'}
								type={'text'}
								placeHolder='Enter your email address'
								onChange={(value)=>setValue('username', value)}
								title='Email address'/>
						</div>
						<div className={styles.registerDrawer__body_form}>
							<Field
								name={'password'}
								type={'text'}
								placeHolder='Enter your password'
								onChange={(value)=>setValue('password', value)}
								title='Password'
							/>
						</div>
						<div className={styles.registerDrawer__body_checkBox}>
							<div className={styles.registerDrawer__body_checkboxContainer}>
								<div className={styles.registerDrawer__body_checkboxContainer_checkbox}><Checkbox/></div>
								<div className={styles.registerDrawer__body_checkboxContainer_stay}>Stay logged in</div>
							</div>
							<div className={styles.registerDrawer__body_checkboxContainer_forgot}>Forgot password?</div>
						</div>
						<div><Button type={ButtonType.Blue} submit={true} imageClassName='icon-arrow-right' fontSize={16} text='Log in'/> </div>
					</div>
					<div onClick={setDrawer}>
						<ButtonSimple type={ButtonSimpleType.small} text='Create new account' imageClassName='icon-new-user' link='/checkoutFirst'/>
					</div>
				</div>
			</form>
		</Drawer>
	</div>
}