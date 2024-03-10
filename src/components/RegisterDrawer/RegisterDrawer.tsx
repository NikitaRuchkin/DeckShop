import {Drawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { useForm, Controller  } from "react-hook-form"
import {RootState} from "../../store/store";
import {getShowDrawer, setShowDrawer} from "../../store/reducers/RegisterDrawer/RegisterDrawer";
import styles from './RegisterDrawer.module.scss'
import Button from "../button/Button";
import {ButtonSimpleType, ButtonType} from "../../shared/types/ButtonTypes";
import Field from "../field/field";
import Checkbox from "../Checkbox/Checkbox";
import ButtonSimple from "../ButtonSimple/ButtonSimple";
import {loadUser, useGetUserTokenQuery} from '../../api/Customer/api'
import {getCustomerToken} from "../../api/Customer/query";
import {useEffect, useState} from "react";
import {setToken} from '../../store/reducers/user/UserReducer'

interface IUserCred {
	email: string;
	password: string;
}

export default function RegisterDrawer() {
	const {
		setError,
		handleSubmit,
		formState: { errors, isDirty },
		clearErrors,
		control,
	} = useForm<IUserCred>({
		defaultValues: {
			email: '',
			password: ''
		},
	})
	
	const showRegisterDrawer = useSelector((state: RootState)=>getShowDrawer(state))
	const [skip, setSkip] = useState(true)
	const [user, setUser] = useState<IUserCred>({email: '', password: ''})
	const {data, isFetching} = useGetUserTokenQuery(getCustomerToken(user.email, user.password), {skip})
	const dispatch = useDispatch()
	const setDrawer = ()=> {
		dispatch(setShowDrawer(false))
	}
	
	useEffect(()=> {
		if(data && data.data?.generateCustomerToken?.token) {
			dispatch(setShowDrawer(false))
			dispatch(setToken(data.data?.generateCustomerToken?.token))
		} else if(data && data.errors?.length !== 0){
			setError('email', {message: 'incorrect email'})
			setError('password', {message: 'incorrect password'})
		}
	}, [data])
	
	
	const onSubmit = async (dataFields: any) => {
		// if(Object.keys(errors).length !== 0) {
		// 	return
		// }
		
		// clearErrors()
		setSkip(false)
		dispatch(loadUser.util.resetApiState());
		setUser(dataFields)
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
							<Controller
								control={control}
								name="email"
								rules={{validate: {
										positive: v => v === ''? 'Field is empty' : true,
									}}
								}
								render={({ field: { onChange, onBlur, value, ref } }) => (
									<Field
										error={errors.email && errors.email.message}
										name={'email'}
										type={'text'}
										placeHolder='Enter your email address'
										onChange={onChange}
										title='Email address'
									/>
								)}
							/>
						</div>
						<div className={styles.registerDrawer__body_form}>
							<Controller
								control={control}
								name="password"
								rules={{validate: {
									positive: v => v === ''? 'Field is empty' : true,
									}}
								}
								render={({ field: { onChange, onBlur, value, ref } }) => (
									<Field
										error={errors.password && errors.password.message}
										name={'password'}
										type={'password'}
										placeHolder='Enter your password'
										onChange={onChange}
										title='Password'
									/>
								)}
							/>
						</div>
						<div className={styles.registerDrawer__body_checkBox}>
							<div className={styles.registerDrawer__body_checkboxContainer}>
								<div className={styles.registerDrawer__body_checkboxContainer_checkbox}><Checkbox/></div>
								<div className={styles.registerDrawer__body_checkboxContainer_stay}>Stay logged in</div>
							</div>
							<div className={styles.registerDrawer__body_checkboxContainer_forgot}>Forgot password?</div>
						</div>
						<div><Button disable={isFetching || !isDirty} type={ButtonType.Blue} submit={isDirty} imageClassName='icon-arrow-right' fontSize={16} text='Log in'/> </div>
					</div>
					<div onClick={setDrawer}>
						<ButtonSimple type={ButtonSimpleType.small} text='Create new account' imageClassName='icon-new-user' link='/checkoutFirst'/>
					</div>
				</div>
			</form>
		</Drawer>
	</div>
}