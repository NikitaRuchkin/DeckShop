import cn from 'clsx'
import styles from './CreateAccount.module.scss'
import Field from "../../components/field/field";
import StepContainer from "../../components/StepContainer/StepContainer";
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import {useState} from "react";
import {Controller, useForm, useWatch} from "react-hook-form";
import {checkEmailValid, checkValid} from "../../shared/validate/checkValid";
import ValidatePassword from "../../components/ValidatePassword/ValidatePassword";
import {watch} from "fs/promises";
import {IFormEmailValid, IFormRegisterValues, IFormRegisterValuesResponse} from "../../api/Customer/type";
import {useDispatch} from "react-redux";
import {loadUser} from "../../api/Customer/api";
import {createUserAccQuery} from "../../api/Customer/query";

const emailValid = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')

export default function CreateAccount() {
	const [disable, setDisable] = useState<boolean>(false)
	const [passError, setPassError] = useState<string | null>('')
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
	
	const watchPassword = useWatch({ control, name: "password" })
	
	const onSubmit = async (dataFields: IFormRegisterValues) => {
		dispatch(loadUser.endpoints.createUserAcc.initiate(createUserAccQuery(dataFields))).then(
			(newData: {data: IFormEmailValid})=>{
				console.log(newData)
				// dispatch(loadUser.endpoints.createUserAcc.initiate(createUserAccQuery(dataFields)))
				// 	.then(
				// 		(data: {data: IFormRegisterValuesResponse})=> {
				// 			return data
				// 		}
				// 	)
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
											error={errors.lastName && errors.lastName.message}
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
											...checkValid
										}}
									}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<Field
											width={376}
											error={errors.lastName && errors.lastName.message}
											name={'password'}
											type={'text'}
											placeHolder='Create a password'
											onChange={onChange}
											title='Password'
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
											placeHolder='Enter created password'
											onChange={onChange}
											title='Confirm password'
										/>
									)}
								/>
							</div>
						</div>
						<ValidatePassword errorFn={()=>{}} pass={watchPassword}/>
					</div>
				</AccountCardWrapperPrimary>
				<div className={styles.account__stepMargin}>
					<StepContainer step={1} large textFirst='Account details'  textSecond='Email confirmation' title='Registration process'/>
				</div>
			</div>
		</form>
	</div>
}