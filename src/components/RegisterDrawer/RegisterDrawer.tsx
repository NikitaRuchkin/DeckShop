import {Drawer} from "@mui/material";
import cn from 'clsx'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getShowDrawer, setShowDrawer} from "../../store/reducers/RegisterDrawer/RegisterDrawer";
import styles from './RegisterDrawer.module.scss'
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Field from "../field/field";
import Checkbox from "../Checkbox/Checkbox";


export default function RegisterDrawer() {
	const showRegisterDrawer = useSelector((state: RootState)=>getShowDrawer(state))
	const dispatch = useDispatch()
	const setDrawer = ()=> {
		dispatch(setShowDrawer(false))
	}

	return <div>
		<Drawer
				style={{height: 'auto'}}
				anchor={'right'}
				open={showRegisterDrawer}
				onClose={setDrawer}
		>
			<div className={styles.registerDrawer}>
				<div className={styles.registerDrawer__header}>
					<div className={styles.registerDrawer__header_text}>Greetings!</div>
					<Button click={setDrawer} type={ButtonType.White} imageClassName={'icon-cross'} fontSize={16}/>
				</div>
				<div className={styles.registerDrawer__body}>
					<div className={styles.registerDrawer__body_title}>Log into existing account</div>
					<div className={styles.registerDrawer__body_form}>
						<Field placeHolder='Enter your email address' onChange={()=>{}} title='Email address'/>
					</div>
					<div className={styles.registerDrawer__body_form}>
						<Field placeHolder='Enter your password' onChange={()=>{}} title='Password'/>
					</div>
					<div className={styles.registerDrawer__body_checkBox}>
						<div className={styles.registerDrawer__body_checkboxContainer}>
							<div className={styles.registerDrawer__body_checkboxContainer_checkbox}><Checkbox/></div>
							<div className={styles.registerDrawer__body_checkboxContainer_stay}>Stay logged in</div>
						</div>
						<div className={styles.registerDrawer__body_checkboxContainer_forgot}>Forgot password?</div>
					</div>
					<div><Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='Log in'/> </div>
				</div>
				<div className={styles.registerDrawer__footer}>
					<div className={styles.registerDrawer__footer_text}>Create new account</div>
					<div className={cn('icon-new-user', styles.registerDrawer__footer_icon)}/>
				</div>
			</div>
		</Drawer>
	</div>
}