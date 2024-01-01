import cn from 'clsx'
import styles from './CreateAccount.module.scss'
import RegistrationProcess from "../../components/RegistrationProcess/RegistrationProcess";
import Field from "../../components/field/field";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";

export default function CreateAccount() {
  return <div className={styles.mainContainer}>
    <div className={styles.account__title}>Creating new account</div>
    <div className={styles.account__container}>
      <div className={styles.account__fieldsContainer}>
        <div className={styles.account__fields__title}>Personal information</div>
        <div className={cn(styles.account__fieldsFlex, styles.account__bigMargin)}>
          <div className={styles.account__fieldWidth}>
            <Field placeHolder='Enter your name' onChange={()=>{}} title='First name' />
          </div>
          <div className={styles.account__fieldWidth}>
            <Field placeHolder='Enter your last name' onChange={()=>{}} title='Last name' />
          </div>
        </div>

        <div className={styles.account__fields__title}>Sign-up information</div>
        <div className={cn(styles.account__fieldsFlex, styles.account__mediumMargin)}>
          <div className={styles.account__fieldWidth}>
            <Field placeHolder='+1' onChange={()=>{}} title='Phone number' />
          </div>
          <div className={cn(styles.account__fieldWidth, styles.account__smallMargin)}>
            <Field placeHolder='Enter your email address' onChange={()=>{}} title='Email address' />
          </div>
          <div className={styles.account__fieldWidth}>
            <Field placeHolder='Enter a password' onChange={()=>{}} title='Password' />
          </div>
          <div className={styles.account__fieldWidth}>
            <Field placeHolder='Confirm your password' onChange={()=>{}} title='Confirm password' />
          </div>
        </div>
        <Button text={'Next step'} type={ButtonType.White} imageClassName={'icon-arrow-right'} fontSize={16}/>
      </div>
      <div><RegistrationProcess step={1}/></div>
    </div>
  </div>
}