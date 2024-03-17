import cn from 'clsx'
import styles from './CheckoutFirst.module.scss'
import StepContainer from "../../components/StepContainer/StepContainer";
import CartMini from "../../components/cartMini/CartMini";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../../components/button/Button";
import Field from "../../components/field/field";
import RadioField from "../../components/RadioField/RadioField";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {SetGuestEmailOnCart, SetShippingAddressesOnCart} from "../../api/Checkout/query";
import {useDispatch} from "react-redux";
import {IUserInfoCheckout} from "../../api/Checkout/types";
import {loadCheckout} from "../../api/Checkout/api";
import {checkValid} from "../../shared/validate/checkValid";

export default function CheckoutFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>()
  const [userExists, setUserExists] = useState(false)
  const [disable, setDisable] = useState(false)
  const {
    setError,
    handleSubmit,
    formState: { errors, isDirty },
    clearErrors,
    control,
  } = useForm<IUserInfoCheckout>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      postalCode: '',
      addressLine: '',
      phone: '',
      province: '',
      password: '',
    },
  })
  
  const onSubmit = async (dataFields: IUserInfoCheckout) => {
    setDisable(true)
    dispatch(loadCheckout.endpoints.checkUserEmail.initiate(SetGuestEmailOnCart(dataFields))).then(
      (data: any)=> {
        setDisable(false)
        // navigate('/CheckoutSecond')
        return data
      }
    )
    // dispatch(loadCheckout.endpoints.sendUserInfo.initiate(SetShippingAddressesOnCart(dataFields))).then(
    //   (data: any)=> {
    //     setDisable(false)
    //     navigate('/CheckoutSecond')
    //     return data
    //   }
    // )
  }
  return <div className={styles.mainContainer}>
    <div className={styles.checkout}>Checkout</div>
    <div className={styles.checkoutFlex}>
      <div><StepContainer step={1} medium textFirst='Shipping information'  textSecond='Payment method' textThird='Confirmation' title='Checkout process'/></div>
      <div className={styles.checkout__fields}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={cn(styles.checkout__title, styles.field__marginTopZero)}>{userExists? 'Client information' : 'Account information'}</div>
          {!userExists && <div className={styles.field__container}>
            <Controller
              control={control}
              name="email"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.email && errors.email.message}
                  name={'email'}
                  type={'text'}
                  placeHolder='Enter your email'
                  onChange={onChange}
                  title='Email address'
                />
              )}
            />
          </div>}
          {userExists && <div>
            <div className={styles.field__info}>
              <div className={cn('icon-user', styles.field__infoIcon)}/>
              <div className={styles.field__infoText}>
                The email you entered belongs to an existing account. Sign in or enter a different email address to continue as guest.
              </div>
            </div>
            <div className={cn(styles.field__container, styles.field__smallMarg)}>
              <Controller
                control={control}
                name="email"
                rules={{validate: {
                    ...checkValid
                  }}
                }
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Field
                    error={errors.email && errors.email.message}
                    name={'email'}
                    type={'text'}
                    placeHolder='Enter your email'
                    onChange={onChange}
                    title='Email address'
                  />
                )}
              />
            </div>
            <div className={cn(styles.field__container, styles.field__smallMarg)}>
              <Controller
                control={control}
                name="password"
                rules={{validate: {
                    ...checkValid.positive
                  }}
                }
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Field
                    error={errors.password && errors.password.message}
                    name={'password'}
                    type={'text'}
                    placeHolder='Enter your email'
                    onChange={onChange}
                    title='Password'
                  />
                )}
              />
            </div>
            <div className={styles.field__recoveryContainer}>
              <Button type={ButtonType.Blue} text='Log in' imageClassName='icon-arrow-right' click={()=>{}}/>
              <div className={styles.field__recovery}>Password recovery</div>
            </div>
          </div>}

          <div className={styles.checkout__title}>Personal information</div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="firstName"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.firstName && errors.firstName.message}
                  name={'firstName'}
                  type={'text'}
                  placeHolder='Enter your first name'
                  onChange={onChange}
                  title='First name'
                />
              )}
            />
          </div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="lastName"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
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

          <div className={styles.checkout__title}>Shipping address</div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="country"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  name={'country'}
                  type={'text'}
                  placeHolder=''
                  onChange={onChange}
                  title='Country'
                  value={'Canada'}
                  disabled
                />
              )}
            />
          </div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="city"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.city && errors.city.message}
                  name={'city'}
                  type={'text'}
                  placeHolder='Enter your city'
                  onChange={onChange}
                  title='City'
                />
              )}
            />
          </div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="postalCode"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.postalCode && errors.postalCode.message}
                  name={'postalCode'}
                  type={'text'}
                  placeHolder='Enter your street'
                  onChange={onChange}
                  title='Street'
                />
              )}
            />
          </div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="province"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.province && errors.province.message}
                  name={'province'}
                  type={'text'}
                  placeHolder='Enter your province'
                  onChange={onChange}
                  title='Province'
                />
              )}
            />
          </div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="addressLine"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.addressLine && errors.addressLine.message}
                  name={'addressLine'}
                  type={'text'}
                  placeHolder='Enter your address'
                  onChange={onChange}
                  title='Address line'
                />
              )}
            />
          </div>
          <div className={styles.field__smallContainer}>
            <Controller
              control={control}
              name="phone"
              rules={{validate: {
                  ...checkValid
                }}
              }
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Field
                  error={errors.phone && errors.phone.message}
                  name={'phone'}
                  type={'number'}
                  placeHolder='+1'
                  onChange={onChange}
                  title='Phone number'
                />
              )}
            />
          </div>

          <div className={styles.checkout__title}>Shipping method</div>
          <div>
            <div className={styles.field__containerShip}>
              <div><RadioField change={()=>{}}/></div>
              <div className={styles.field__price}>$50.00</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>FedEx</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>2 business days</div>
            </div>
            <div className={styles.field__containerShip}>
              <div><RadioField change={()=>{}}/></div>
              <div className={styles.field__price}>$69.99</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>ArcBest</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>3-5 business days</div>
            </div>
            <div className={styles.field__containerShip}>
              <div><RadioField change={()=>{}}/></div>
              <div className={styles.field__price}>$200.00</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>Deckshop</div>
              <div className={styles.field__line}/>
              <div className={styles.field__shippingText}>7 business days</div>
            </div>
          </div>

          <div className={styles.btnMargin}>
            <Button type={ButtonType.Blue} imageClassName='icon-arrow-right' fontSize={16} text='To payment method' submit={true} disable={disable}/>
          </div>

        </div>
        </form>
      </div>
      <div><CartMini/></div>
    </div>
  </div>
}