import styles from './CartMedium.module.scss'
import cn from 'clsx'
import defaultImage from '../../assets/imgPng/5.png'
import CircleButton from "../circleButton/CircleButton";
import React, {useState} from "react";
import {Controller, useForm, useWatch} from "react-hook-form";
import Field from "../field/field";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../button/Button";

interface IProp {
  img: string,
  brand: string,
  name: string,
  amount: number,
  price: string,
  color: string,
  width: string,
  profile: string
}

interface IPropItem {
  "errors": null | {message: string},
  "quantity": number,
  "id": string,
  "product": {
    "id": number,
    "name": string,
    "price": {
      "regularPrice": {
        "amount": {
          "value": number
        }
      }
    },
    "uid": string,
    "url_key": string
  }
  deleteCartById: (id: number)=> void
}

export default function CartMedium(props: IPropItem) {
  const {
    setError,
    handleSubmit,
    formState: { errors, isDirty },
    clearErrors,
    setValue,
    control,
    getValues
  } = useForm<{quantity: number}>({
    defaultValues: {
      quantity: props.quantity,
    },
  })
  const changeQuantity = (count: number)=> {
    if(count === 0 || count < 0) {
      setQuantity(1)
      setValue('quantity', 1)
    } else {
      setQuantity(count)
      setValue('quantity', count)
    }
  }
  const watchQuantity = useWatch({ control, name: "quantity" })
  const onSubmit = async (dataFields: {quantity: number}) => {
    setQuantity(dataFields.quantity)
  }
  // const {amount, name, color, profile, width, price, brand} = props
  const [quantity, setQuantity] = useState(props.quantity)
  const quantityMinus = () => {
    if(quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }
  return <div className={styles.cartMedium}>
    <div>
      {/*<img className={styles.cartMedium__img} src={img? img : defaultImage} alt='product'/>*/}
      <img className={styles.cartMedium__img} src={defaultImage} alt='product'/>
    </div>
    <div className={styles.cartMedium__size}>
      <div className={cn(styles.cartMedium__flex, styles.flexBetween)}>
        <div className={styles.cartMedium__name}>
          <div className={styles.semiBlue}>{props.product.name}</div>
          <div className={styles.blue}>{props.product.url_key}</div>
        </div>
        <div onClick={()=> props.deleteCartById(Number(props.id))} className={cn('icon-bin', styles.iconBin)}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.cartMedium__amount}>
        <Controller
          control={control}
          name="quantity"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Field
              name='quantity'
              type='number'
              placeHolder=''
              onChange={onChange}
              width={80}
              value={value}
            />
          )}
        />
        {/*<div className={styles.cartMedium__quantity}>{props.quantity}</div>*/}
        <div className={styles.cartMedium__flex}>
          <div className={styles.marginRight}>
            <Button type={ButtonType.White} imageClassName={'icon-minus'} click={()=>changeQuantity(quantity - 1)} disable={quantity === 1} />
          </div>
          <Button type={ButtonType.White} imageClassName={'icon-plus'} click={()=>changeQuantity(quantity + 1)} />
        </div>
      </div>
      </form>
      <div className={styles.cartMedium__properties}>
        {/*<div className={styles.cartMedium__property}>*/}
        {/*  <div>Color:&nbsp;</div>*/}
        {/*  <div className={styles.cartMedium__property_regular}>{color}</div>*/}
        {/*</div>*/}
        {/*<div className={styles.cartMedium__property}>*/}
        {/*  <div>Profile:&nbsp;</div>*/}
        {/*  <div className={styles.cartMedium__property_regular}>{profile}</div>*/}
        {/*</div>*/}
        <div className={styles.cartMedium__property}>
          <div>Width:&nbsp;</div>
          <div className={styles.cartMedium__property_regular}>{props.product.id}</div>
        </div>
      </div>
      <div className={styles.cartMedium__price}>${props.product.price.regularPrice.amount.value}</div>
    </div>
  </div>
}