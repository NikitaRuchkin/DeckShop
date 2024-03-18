import cn from 'clsx'
import styles from './CreateAccount.module.scss'
import Field from "../../components/field/field";
import StepContainer from "../../components/StepContainer/StepContainer";
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import {useEffect, useState} from "react";
import {Controller, useForm, useWatch} from "react-hook-form";
import {checkValid, emailValid} from "../../shared/validate/checkValid";
import ValidatePassword from "../../components/ValidatePassword/ValidatePassword";
import {IFormRegisterValues, IFormRegisterValuesResponse} from "../../api/Customer/type";
import {useDispatch} from "react-redux";
import {loadUser} from "../../api/Customer/api";
import {createUserAccQuery} from "../../api/Customer/query";
import {setUserEmailRegister} from "../../store/reducers/user/UserReducer"
import {useNavigate} from "react-router-dom";
import {setShowDrawer} from "../../store/reducers/RegisterDrawer/RegisterDrawer";


export default function CreateAccount() {
	const navigate = useNavigate();
	
	const [disable, setDisable] = useState<boolean>(false)
	const [passError, setPassError] = useState<boolean>(false)
	const [emailError, setEmailError] = useState<boolean>(false)
	const dispatch = useDispatch<any>()
	const {
		setError,
		handleSubmit,
		formState: { errors, isDirty },
		clearErrors,
		control,
	} = useForm<IFormRegisterValues>({
		mode: "onSubmit",
		defaultValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})
	
	const setDrawer = ()=> {
		dispatch(setShowDrawer(true))
	}
	
	const watchPassword = useWatch({ control, name: "password" })
	
	const onSubmit = async (dataFields: IFormRegisterValues) => {
		setDisable(true)
		setEmailError(false)
		clearErrors()
		dispatch(loadUser.endpoints.createUserAcc.initiate(createUserAccQuery(dataFields))).then(
			(newData: {data: IFormRegisterValuesResponse})=>{
				if(newData && newData.data.data && newData.data.data.createCustomerV2 === null) {
					setEmailError(true)
					setError('email',  { type: 'custom', message: 'Already exists' })
				} else {
					dispatch(setUserEmailRegister(dataFields.email))
					navigate('/confirmEmail')
				}
				setDisable(false)
				return newData
			}
		)
	}
	return <div className={styles.mainContainer}>
		<div className={styles.account__title}>Creating new account</div>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.account__container}>
				<AccountCardWrapperPrimary
					title='Personal information'
					buttonText='Create account'
					buttonIcon='icon-arrow-right'
					submit
					disable={disable}
				>
					<div>
						<div className={cn(styles.account__flexBox, styles.account__userInfoMargins)}>
							<Controller
								control={control}
								name="firstName"
								rules={{validate: {
										...checkValid
									}}
								}
								render={({ field: { onChange, onBlur, value, ref } }) => (
									<Field
										width={376}
										error={errors.firstName && errors.firstName.message}
										name={'firstName'}
										type={'text'}
										placeHolder='Enter your first name'
										onChange={onChange}
										title='First name'
									/>
								)}
							/>
							<Controller
								control={control}
								name="lastName"
								rules={{validate: {
										...checkValid
									}}
								}
								render={({ field: { onChange, onBlur, value, ref } }) => (
									<Field
										width={376}
										error={errors.lastName && errors.lastName.message}
										name={'lastName'}
										type={'text'}
										placeHolder='Enter your last name'
										onChange={onChange}
										title='Last name'
									/>
								)}
							/>
						</div>
						<div>
							<div className={styles.account__titleSmall}>Sign-up information</div>
							{emailError && <div className={styles.account__emailExist}>
                  <div className={cn('icon-user', styles.account__emailExist__icon)}/>
                  <div className={styles.account__emailExist__text}>The email you entered belongs to an existing account. Enter a different email address or <span onClick={setDrawer}>log in</span>.</div>
              </div>}
							<div className={cn(styles.account__flexBox, styles.account__marginBottom32px)}>
								<Controller
									control={control}
									name="phone"
									rules={{validate: {
											...checkValid.checkEmptyField
										}}
									}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<Field
											width={376}
											error={errors.phone && errors.phone.message}
											name={'phone'}
											type={'number'}
											placeHolder='+1'
											onChange={onChange}
											title='Phone number'
										/>
									)}
								/>
								<Controller
									control={control}
									name="email"
									rules={{validate: {
											...checkValid,
											checkEmail: (v:string) => emailValid.test(v)? true : 'Incorrect email',
										}}
									}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<Field
											width={376}
											error={errors.email && errors.email.message}
											name={'email'}
											type={'text'}
											placeHolder='Enter your email address'
											onChange={onChange}
											title='Email'
										/>
									)}
								/>
							</div>
							<div className={styles.account__flexBox}>
								<Controller
									control={control}
									name="password"
									rules={{validate: {
											...checkValid,
											validPass: ()=> passError? true : 'Must meet requirements',
										}}
									}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<Field
											width={376}
											error={errors.password && errors.password.message}
											name={'password'}
											type={'password'}
											placeHolder='Create a password'
											onChange={onChange}
											title='Password'
										/>
									)}
								/>
								<Controller
									control={control}
									name="confirmPassword"
									rules={{validate: {
											positive: (v:string | number) => v === ''? 'Must be confirmed' : true,
											checkEmptyField: (v:string) => v.trim() === ''? 'Must be confirmed' : true,
											checkPass: (v)=> v === watchPassword? true : 'Does not match',
										}}
									}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<Field
											width={376}
											error={errors.confirmPassword && errors.confirmPassword.message}
											name={'confirmPassword'}
											type={'password'}
											placeHolder='Enter created password'
											onChange={onChange}
											title='Confirm password'
										/>
									)}
								/>
							</div>
						</div>
						<ValidatePassword errorFn={setPassError} pass={watchPassword}/>
					</div>
				</AccountCardWrapperPrimary>
				<div className={styles.account__stepMargin}>
					<StepContainer step={1} large textFirst='Account details'  textSecond='Email confirmation' title='Registration process'/>
				</div>
			</div>
		</form>
	</div>
}