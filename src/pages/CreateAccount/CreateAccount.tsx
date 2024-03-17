import cn from 'clsx'
import styles from './CreateAccount.module.scss'
import Field from "../../components/field/field";
import StepContainer from "../../components/StepContainer/StepContainer";
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {checkValid} from "../../shared/validate/checkValid";
import ValidatePassword from "../../components/ValidatePassword/ValidatePassword";

interface IFormValues {
	firstName: string;
	lastName: string;
	phone: number | string;
	email: string;
	password: string;
	confirmPassword: string;
}

export default function CreateAccount() {
	const [disable, setDisable] = useState<boolean>(false)
	const {
		setError,
		handleSubmit,
		formState: { errors, isDirty },
		clearErrors,
		control,
	} = useForm<IFormValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})
	const onSubmit = async (dataFields: IFormValues) => {
	
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
							<div className={styles.account__flexBox}>
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
						</div>
						<ValidatePassword/>
					</div>
				</AccountCardWrapperPrimary>
				<div className={styles.account__stepMargin}>
					<StepContainer step={1} large textFirst='Account details'  textSecond='Email confirmation' title='Registration process'/>
				</div>
			</div>
		</form>
	</div>
}