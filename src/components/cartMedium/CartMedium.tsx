import styles from './CartMedium.module.scss'
import cn from 'clsx'
import defaultImage from '../../assets/imgPng/5.png'
import CircleButton from "../circleButton/CircleButton";
import React, {useEffect, useState, useRef} from "react";
import {Controller, useForm, useWatch} from "react-hook-form";
import Field from "../field/field";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Button from "../button/Button";
import {loadCart} from "../../api/Cart/api";
import {useDispatch} from "react-redux";
import {cartGetDataQuery, updateCartItemsQuery} from "../../api/Cart/query";
import {CartData, ICart} from '../../api/Cart/types'

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
	prices: {
		row_total: {
			value: number
		},
	}
	"product": {
		image: {
			label: string;
			url: string;
		},
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
	localData: (props: ICart)=> void
	changeQuantityAndGetData: (uid: number, quantity: number)=> void
}

export default React.memo(function CartMedium(props: IPropItem) {
	// const {amount, name, color, profile, width, price, brand} = props
	const dispatch = useDispatch<any>()
	const firstRender = useRef(true);
	const [quantity, setQuantity] = useState(props.quantity)
	const {
		setError,
		handleSubmit,
		formState: { errors, isDirty },
		clearErrors,
		setValue,
		control,
		getValues
	} = useForm<{quantity: number}>({
		mode: "onChange",
		reValidateMode: "onBlur",
		defaultValues: {
			quantity: props.quantity,
		},
		
	})
	
	const changeQuantity = (count: number)=> {
		console.log(1)
			if(count === 0 || count < 0) {
				setValue('quantity', 1)
				props.changeQuantityAndGetData(Number(props.id), count)
			} else {
				setValue('quantity', count)
				props.changeQuantityAndGetData(Number(props.id), count)
			}
	}
	
	const watchQuantity = useWatch({ control, name: "quantity", defaultValue: props.quantity})
	const onSubmit = async (dataFields: {quantity: number}) => {
		changeQuantity(dataFields.quantity)
	}
	
	return <div className={styles.cartMedium}>
		<div>
			<img className={styles.cartMedium__img} src={props.product.image.url} alt='product'/>
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
								onBlur={handleSubmit(onSubmit)}
								width={80}
								value={value}
							/>
						)}
					/>
					<div className={styles.cartMedium__flex}>
						<div className={styles.marginRight}>
							<Button type={ButtonType.White} imageClassName={'icon-minus'} click={()=> {
								setValue('quantity', Number(watchQuantity) - 1)
								onSubmit({quantity: Number(watchQuantity) - 1})
							}} disable={watchQuantity === 1} />
						</div>
						<Button type={ButtonType.White} imageClassName={'icon-plus'} click={()=> {
							setValue('quantity', Number(watchQuantity) + 1)
							onSubmit({quantity: Number(watchQuantity) + 1})
						}}/>
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
					<div className={styles.cartMedium__property_regular}>{props.product.price.regularPrice.amount.value}</div>
				</div>
			</div>
			<div className={styles.cartMedium__price}>${props.prices.row_total.value}</div>
		</div>
	</div>
})