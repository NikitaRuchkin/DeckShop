import styles from './Cart.module.scss'
import cn from 'clsx'
import CartMedium from "../../components/cartMedium/CartMedium";
import {Key, useEffect, useState} from "react";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import {loadCart, useGetCartDataQuery} from "../../api/Cart/api";
import {
  addSingleConfigurableProductToCartQuery,
  cartGetDataQuery,
  removeItemFromCartQuery,
  updateCartItemsQuery
} from "../../api/Cart/query";
import CartLoader from "../../components/Loaders/CartLoader/CartLoader";
import {useDispatch} from "react-redux";
import {setShowDrawer} from "../../store/reducers/RegisterDrawer/RegisterDrawer";
import {CartData, CartDataRemove, ICart, IUpdateCart} from "../../api/Cart/types";
import {setQuantityGlobal} from "../../store/reducers/Products/ProductsReducer";

// const data = [
//   {
//     img: '',
//     brand: 'Trex',
//     name: 'TimberTech Driftwood',
//     amount: 1,
//     price: '99.00',
//     color: 'Oak Grey',
//     width: '12 in',
//     profile: 'Grooved'
//   },
//   {
//     img: '',
//     brand: 'Trex',
//     name: 'TimberTech Driftwood',
//     amount: 1,
//     price: '99.00',
//     color: 'Oak Grey',
//     width: '12 in',
//     profile: 'Grooved'
//   },
//   {
//     img: '',
//     brand: 'Trex',
//     name: 'TimberTech Driftwood',
//     amount: 1,
//     price: '99.00',
//     color: 'Oak Grey',
//     width: '12 in',
//     profile: 'Grooved'
//   },
// ]

export default function Cart() {
  const {data, isLoading} = useGetCartDataQuery(cartGetDataQuery())
  const dispatch = useDispatch<any>()
  const [dataLocal, setLocalData] = useState<ICart | undefined>(data && data.data.cart)
  
  const changeQuantityAndGetData = (uid: number, quantity: number) => {
    dispatch(loadCart.endpoints.updateProductInCart.initiate(updateCartItemsQuery(uid, quantity))).then((newData: {data: IUpdateCart})=> {
      if(newData && newData.data) {
        setLocalData(newData.data.data.updateCartItems.cart)
        dispatch(setQuantityGlobal(newData.data.data.updateCartItems.cart.total_quantity))
      }
      return newData
    })
  }
  
  const deleteCartById = (id: number) => {
    if(data && data.data.cart.items) {
      dispatch(loadCart.endpoints.addProductToCart.initiate(
        removeItemFromCartQuery(id))
      ).then((newData: {data: CartDataRemove})=> {
          dispatch(setQuantityGlobal(newData.data.data.removeItemFromCart.cart.total_quantity))
          setLocalData(newData.data.data.removeItemFromCart.cart)
          return newData
      })
    }
  }
  
  useEffect(()=> {
    setLocalData(data && data.data.cart)
  }, [data])

  return <div className={styles.mainContainer}>
    {isLoading && <CartLoader/>}
    {dataLocal && dataLocal.items.length === 0 && <div>
      <div className={cn(styles.title, styles.marginBottom24)}>Your shopping cart is empty</div>
      <div className={styles.smallText}>
        <span
          className={cn(styles.smallText, styles.logOrRegister)}
          onClick={()=>dispatch(setShowDrawer(true))}
        >
          Log in or register</span> for a better shopping experience.</div>
    </div>
    }
    {dataLocal && dataLocal.items.length !== 0 && <div className={styles.marginBottom}>
      <div className={styles.title}>Your shopping cart</div>
      <div className={styles.containerContent}>
      
      <div>
        {dataLocal.items.map(
          (item, index: Key)=> <div key={index} className={styles.cartBox}>
            <CartMedium
              {...item}
              deleteCartById={deleteCartById}
              localData={setLocalData}
              changeQuantityAndGetData={changeQuantityAndGetData}
            />
          </div>
        )}
      </div>
      
      <div>
        <OrderSummary
          subtotal={dataLocal.prices.subtotal_excluding_tax.value}
          grandTotal={dataLocal.prices.grand_total.value}/>
      </div>
      </div>
    </div>
    }
  </div>
}