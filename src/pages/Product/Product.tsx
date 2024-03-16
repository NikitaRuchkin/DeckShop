import React, {useEffect, useState} from "react";
import cn from "clsx";
import styles from './Product.module.scss'
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import productImage from '../../assets/img/Product.png'
import Button from "../../components/button/Button";
import {data, preparedData} from "../../components/carousel/data";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getCardById, setQuantityGlobal} from "../../store/reducers/Products/ProductsReducer";
import {useGetProductQuery} from "../../api/Products/api";
import {loadCart} from "../../api/Cart/api";
import {productQuery} from "../../api/Products/query";
import {addSingleConfigurableProductToCartQuery} from "../../api/Cart/query";
import Field from "../../components/field/field";
import {Controller, useForm, useWatch} from "react-hook-form";
import ProductLoader from "../../components/Loaders/ProductLoader/ProductLoader";
import {CartData} from "../../api/Cart/types";

const dataImage = [
	{link: productImage},
	{link: productImage},
	{link: productImage},
	{link: productImage},
	{link: productImage},
]

interface getTotalQuantity {
		data: {
			addProductsToCart: {
				cart: {
					total_quantity: number
				}
			}
	}
}

export default function Product() {
	let {product} = useParams();
	const {data, isFetching} = useGetProductQuery(productQuery((product as string)))
	const dispatch = useDispatch<any>()
	const [currentPhoto, setCurrentPhoto] = useState(0)
	const [quantity, setQuantity] = useState(1)
	const [disable, setDisable] = useState(false)
	
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
			quantity: 1,
		},
	})
	
	const cardInfo = useSelector((state: RootState)=>getCardById(state))
	// useEffect(()=> {
	//       dispatch(setCardById(product))
	//   }
	//   ,[])
	
	const onSubmit = async (dataFields: {quantity: number}) => {
		setQuantity(dataFields.quantity)
	}
	
	const addProductToCart = ()=> {
		setDisable(true)
		if(data && data.data.products) {
			if(quantity < 1) {
				setQuantity(1)
			}
			dispatch(loadCart.util.resetApiState())
			dispatch(loadCart.endpoints.addProductToCart.initiate(
				addSingleConfigurableProductToCartQuery(data.data.products.items[0].sku, quantity)
			)).then(
				(product: {data: getTotalQuantity})=> {
					if(product && product.data.data) {
						dispatch(setQuantityGlobal(product.data.data.addProductsToCart.cart.total_quantity))
					}
					setDisable(false)
					return data
				}
			)
		}
	}
	
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

	useEffect(()=> {
		changeQuantity(Number(watchQuantity))
		}, [watchQuantity])
	
	return <div className={styles.mainContainer}>
		{isFetching && <ProductLoader/>}
		{data && data.data.products && <div>
        <div className={styles.breadCrumbsBox}>
            <BreadCrumbs/>
        </div>
				<div className={styles.product}>
        <div className={styles.product__images}>
            <div className={styles.product__images__currentImage}>
							{/*<img src={dataImage[currentPhoto].link} alt='product image'/>*/}
                <img className={styles.product__images_small} src={data.data.products.items[0].small_image.url} alt='product image'/>
            </div>
					{/*<div className={styles.imagesOfProductContainer}>*/}
					{/*    {dataImage.map(*/}
					{/*        (item, index)=>*/}
					{/*            <img*/}
					{/*                className={cn(styles.imagesOfProduct, index !== currentPhoto && styles.hiddenImages)}*/}
					{/*                onClick={()=> setCurrentPhoto(index)}*/}
					{/*                key={index}*/}
					{/*                src={item.link}*/}
					{/*                alt={`${index} product`}*/}
					{/*            />*/}
					{/*    )}*/}
					{/*</div>*/}
        </div>
        <div className={styles.product__info}>
            <div className={styles.product__info__brand}>{data.data.products.items[0].name}</div>
            <div className={styles.product__info__name}>{data.data.products.items[0].name}</div>
            <div className={styles.product__info__price}>${data.data.products.items[0].price.regularPrice.amount.value}</div>
            <div>
                <Button text={'Add to cart'}
												disable={data.data.products.items[0].stock_status !== 'IN_STOCK' || disable}
												type={ButtonType.Blue}
												imageClassName={'icon-cart'}
												click={addProductToCart}
								/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={styles.line} />
                    <div className={styles.sectionInfo}>
                        <div className={styles.sectionInfo__width}>Width</div>
                        <div className={styles.sectionInfo__value}>12 in</div>
                    </div>
                    <div className={styles.sectionInfo}>
                        <div className={styles.sectionInfo__width}>Profile</div>
                        <div className={styles.sectionInfo__value}>Grooved</div>
                    </div>
                    <div className={styles.sectionInfo}>
                        <div>
                            <div className={styles.sectionInfo__width}>Quantity</div>
                            <div className={styles.sectionInfo__quantity_control}>
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
                                <div className={styles.flex__control}>
                                    <Button type={ButtonType.White} imageClassName={'icon-minus'} click={()=>changeQuantity(quantity - 1)} disable={quantity === 1} />
                                    <div className={styles.btnMargin}>
                                        <Button type={ButtonType.White} imageClassName={'icon-plus'} click={()=>changeQuantity(quantity + 1)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Description</div>
                        <div className={styles.sectionInfo__text}>AZEK American Walnut Boards are available in both a "solid" (also called square shouldered) and "grooved" profiles. Install main deck with Grooved boards using CONCEALoc hidden fasteners. Use Solid boards for deck perimeter picture framing and steps using color matching Face fastening screws or Screws with plugs.</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Board Profile</div>
                        <div className={styles.sectionInfo__text}>Grooved / Solid / Fascia</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Grooved Boards' Length</div>
                        <div className={styles.sectionInfo__text}>12' / 16' / 20'</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Solid Boards' Length</div>
                        <div className={styles.sectionInfo__text}>16' / 20'</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Material</div>
                        <div className={styles.sectionInfo__text}>Capped Celular PVC</div>
                    </div>
                    <div className={styles.sectionInfo__flex}>
                        <div className={styles.sectionInfo__width__withOutValue}>Joists structure</div>
                        <div className={styles.sectionInfo__text}>16"-on-centre for straight applications; 12"-on-centre for diagonal applications</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
		</div>
		}
		{data && data.data.errors && <div>123123</div>}
		<div>
			{/*<CarouselComponent special='Related products' title='Frequently bought with' badgeSecondary products={products}/>*/}
		</div>
	</div>
}