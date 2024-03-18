import styles from './ValidatePassword.module.scss'
import {useEffect, useState} from 'react'
import cn from "clsx";

interface IProp {
	pass: string,
	errorFn: (e: boolean)=> void
}

interface IValidCheck {
	length: boolean | null,
	uppercase: boolean | null,
	numbers: boolean | null
}

const regExpNumbers = new RegExp("[0-9]")
const regExpNumbers2 = new RegExp("^(?=(?:.*\\d){2})")
const regExpUppercase = new RegExp("[A-Z]")
const regExpUppercase2 = new RegExp("^(?=(?:.*[A-Z]){2})")

export default function ValidatePassword({pass, errorFn}: IProp) {
	const [status, setStatus] = useState<null | string>('')
	const [regExps, setRegExps] = useState<IValidCheck>({length: true, uppercase: true, numbers: true})
	
	const setValidStatus = (value: string) => {
		let checkValid: IValidCheck = {length: null, uppercase: null, numbers: null}
		let checkValidStrong: IValidCheck = {length: null, uppercase: null, numbers: null}
		console.log('value: ', value)
		
		if(value === '') {
			setRegExps(checkValid)
			setStatus(null)
			return
		}
		
		if(value.length >= 8) {
			checkValid = {...checkValid, length: true}
			if(value.length >= 12) {
				checkValidStrong = {...checkValidStrong, length: true}
			} else {
				checkValidStrong = {...checkValidStrong, length: false}
			}
		} else {
			checkValid = {...checkValid, length: false}
			checkValidStrong = {...checkValidStrong, length: false}
		}
		
		if(regExpUppercase.test(value)) {
			checkValid = {...checkValid, uppercase: true}
			if(regExpUppercase2.test(value)) {
				checkValidStrong = {...checkValidStrong, uppercase: true}
			} else {
				checkValidStrong = {...checkValidStrong, uppercase: false}
			}
		} else {
			checkValid = {...checkValid, uppercase: false}
			checkValidStrong = {...checkValidStrong, uppercase: false}
		}
		
		if(regExpNumbers.test(value)){
			checkValid = {...checkValid, numbers: true}
			if(regExpNumbers2.test(value)) {
				checkValidStrong = {...checkValidStrong, numbers: true}
			} else {
				checkValidStrong = {...checkValidStrong, numbers: false}
			}
		} else {
			checkValid = {...checkValid, numbers: false}
			checkValidStrong = {...checkValidStrong, numbers: false}
		}
		
		if(checkValid.length && checkValid.numbers && checkValid.uppercase && checkValidStrong.numbers && checkValidStrong.uppercase && checkValidStrong.length) {
			setStatus('Strong')
			errorFn(true)
		} else if(checkValid.length && checkValid.numbers && checkValid.uppercase){
			setStatus('Medium')
			errorFn(true)
		} else {
			errorFn(false)
			setStatus('Weak')
		}
		setRegExps(checkValid)
	}
	
	useEffect(
		()=> {
			setValidStatus(pass)
		}
	, [pass])
	
	return <div>
		<div className={styles.password}>
			<div>Password strength</div>
			<div>
				{status === 'Weak' && <div className={cn(styles.password__rules__status, styles.password__rules__status_red)}>Weak</div>}
				{status === 'Medium' && <div className={cn(styles.password__rules__status, styles.password__rules__status_yellow)}>Medium</div>}
				{status === 'Strong' && <div className={cn(styles.password__rules__status, styles.password__rules__status_green)}>Strong</div>}
			</div>
		</div>
		<div>
			<div className={styles.password__line}>
				{status === 'Weak' && <div className={styles.password__line_red}/>}
				{status === 'Medium' && <div className={styles.password__line_yellow}/>}
				{status === 'Strong' && <div className={styles.password__line_green}/>}
			</div>
		</div>
		<div className={styles.password__rulesContainer}>
			<div className={styles.password__rules_title}>
				<div className={cn('icon-lock', styles.password__rules_icon)}/>Password requirements:
			</div>
			<div>
				<div
					className={cn(
						styles.password__rules_text,
						regExps.length === null && styles.password__rules_icon_grey,
						regExps.length !== null && regExps.length && styles.password__rules_icon_green,
						regExps.length !== null && !regExps.length && styles.password__rules_icon_red,
					)}
				>
					<div
						className={cn(
							regExps.length === null && 'icon-placeholder',
							regExps.length !== null && regExps.length && 'icon-check',
							regExps.length !== null && !regExps.length && 'icon-cross',
							styles.password__rules_iconRule,
							regExps.length === null && styles.password__rules_icon_grey,
							regExps.length !== null && regExps.length && styles.password__rules_icon_green,
							regExps.length !== null && !regExps.length && styles.password__rules_icon_red,
							)}
					/>
					Must be greater than 8 characters.
				</div>
				<div
					className={cn(
						styles.password__rules_text,
						regExps.uppercase === null && styles.password__rules_icon_grey,
						regExps.uppercase !== null && regExps.uppercase && styles.password__rules_icon_green,
						regExps.uppercase !== null && !regExps.uppercase && styles.password__rules_icon_red,
					)}
				>
					<div 						className={cn(
						regExps.uppercase === null && 'icon-placeholder',
						regExps.uppercase !== null && regExps.uppercase && 'icon-check',
						regExps.uppercase !== null && !regExps.uppercase && 'icon-cross',
						styles.password__rules_iconRule,
						regExps.uppercase === null && styles.password__rules_icon_grey,
						regExps.uppercase !== null && regExps.uppercase && styles.password__rules_icon_green,
						regExps.uppercase !== null && !regExps.uppercase && styles.password__rules_icon_red,
						)}
					/>
					Must contain uppercase letters.
				</div>
				<div
					className={cn(
						styles.password__rules_text,
						regExps.numbers === null && styles.password__rules_icon_grey,
						regExps.numbers !== null && regExps.numbers && styles.password__rules_icon_green,
						regExps.numbers !== null && !regExps.numbers && styles.password__rules_icon_red,
					)}
				>
					<div 						className={cn(
						regExps.numbers === null && 'icon-placeholder',
						regExps.numbers !== null && regExps.numbers && 'icon-check',
						regExps.numbers !== null && !regExps.numbers && 'icon-cross',
						styles.password__rules_iconRule,
						regExps.numbers === null && styles.password__rules_icon_grey,
						regExps.numbers !== null && regExps.numbers && styles.password__rules_icon_green,
						regExps.numbers !== null && !regExps.numbers && styles.password__rules_icon_red,
						)}
					/>
					Must contain numbers.
				</div>
			</div>
		</div>
	</div>
}