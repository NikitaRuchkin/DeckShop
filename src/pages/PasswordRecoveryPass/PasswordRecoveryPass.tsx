import styles from './PasswordRecoveryPass.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Controller, useForm, useWatch} from "react-hook-form";
import {IFormRegisterValues, IFormResetUserPassword} from "../../api/Customer/type";
import {useNavigate} from "react-router-dom";
import {checkValid, emailValid} from "../../shared/validate/checkValid";
import Field from "../../components/field/field";
import StepContainer from "../../components/StepContainer/StepContainer";
import {loadUser} from "../../api/Customer/api";
import {requestPasswordResetEmail, requestPasswordResetPass} from "../../api/Customer/query";
import ValidatePassword from "../../components/ValidatePassword/ValidatePassword";

export default function PasswordRecoveryPass() {
	const [passError, setPassError] = useState<boolean>(false)
	const dispatch = useDispatch<any>()
	const navigate = useNavigate();
	
	const {
		setError,
		handleSubmit,
		formState: { errors, isDirty },
		clearErrors,
		control,
	} = useForm<{password: string, confirmPassword: string}>({
		mode: "onChange",
		reValidateMode: 'onChange',
		defaultValues: {
			password: '',
			confirmPassword: ''
		},
	})
	console.log('errors: ',errors)
	const onSubmit = async (dataFields: {password: string, confirmPassword:string}) => {
		console.log(dataFields)
		dispatch(loadUser.endpoints.resetUserPasswordEmail.initiate(requestPasswordResetPass('email', 'token', dataFields.password))).then(
			(newData:IFormResetUserPassword)=> {
				navigate('/')
				return newData
			}
		)
	}
	const watchPassword = useWatch({ control, name: "password" })
	
	return <div className={styles.mainContainer}>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.recovery__title}>Password recovery</div>
			<div className={styles.recovery__container}>
				<AccountCardWrapperPrimary
					title='Account details'
					buttonText='Initiate recovery'
					buttonIcon='icon-arrow-right'
					submit
					disable={(!!errors.password || !!errors.confirmPassword) || !isDirty}
				>
					<div>
						<div className={styles.recovery__text}>To initiate the recovery process, enter the email address that your account is linked to.</div>
						<div className={styles.recovery__field}>
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
						<ValidatePassword errorFn={setPassError} pass={watchPassword}/>
					</div>
				</AccountCardWrapperPrimary>
				<StepContainer step={3} textFirst='Email address'  textSecond='Confirmation' textThird='New password' title='Recovery process' large />
			</div>
		</form>
	</div>
}