import styles from './PasswordRecovery.module.scss'
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {IFormRegisterValues, IFormResetUserPassword} from "../../api/Customer/type";
import {useNavigate} from "react-router-dom";
import {checkValid, emailValid} from "../../shared/validate/checkValid";
import Field from "../../components/field/field";
import StepContainer from "../../components/StepContainer/StepContainer";
import {loadUser} from "../../api/Customer/api";
import {requestPasswordResetEmail} from "../../api/Customer/query";

export default function PasswordRecovery() {
	const dispatch = useDispatch<any>()
	const navigate = useNavigate();
	
	const {
		setError,
		handleSubmit,
		formState: { errors, isDirty },
		clearErrors,
		control,
	} = useForm<{email: string;}>({
		mode: "onChange",
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
		},
	})
	console.log('errors: ',errors)
	const onSubmit = async (dataFields: {email: string;}) => {
		console.log(dataFields)
		dispatch(loadUser.endpoints.resetUserPasswordEmail.initiate(requestPasswordResetEmail(dataFields.email))).then(
			(newData:IFormResetUserPassword)=> {
				navigate('/')
				return newData
			}
		)
	}
	
	return <div className={styles.mainContainer}>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.recovery__title}>Password recovery</div>
			<div className={styles.recovery__container}>
				<AccountCardWrapperPrimary
					title='Account details'
					buttonText='Initiate recovery'
					buttonIcon='icon-arrow-right'
					submit
					disable={!!errors.email || !isDirty}
				>
					<div>
						<div className={styles.recovery__text}>To initiate the recovery process, enter the email address that your account is linked to.</div>
						<div className={styles.recovery__field}>
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
					</div>
				</AccountCardWrapperPrimary>
				<StepContainer step={1} textFirst='Email address'  textSecond='Confirmation' textThird='New password' title='Recovery process' large />
			</div>
		</form>
	</div>
}