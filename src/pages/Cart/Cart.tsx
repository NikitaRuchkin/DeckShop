import styles from './Cart.module.scss'
import CartMedium from "../../components/cartMedium/CartMedium";
import {Key} from "react";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import {useGetCartDataQuery} from "../../api/Cart/api";
import {cartGetDataQuery} from "../../api/Cart/query";
import CartLoader from "../../components/Loaders/CartLoader/CartLoader";

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
  const {data, isFetching} = useGetCartDataQuery(cartGetDataQuery())

  return <div className={styles.mainContainer}>
    {isFetching && <CartLoader/>}
    {data && data.data.cart.items && <div className={styles.marginBottom}>
      <div className={styles.title}>Your shopping cart</div>
      <div className={styles.containerContent}>
      
      <div>
        {data.data.cart.items.map(
          (item, index: Key)=> <div key={index} className={styles.cartBox}>
            <CartMedium {...item} />
          </div>
        )}
      </div>
      
      <div>
        <OrderSummary
          subtotal={data.data.cart.prices.subtotal_excluding_tax.value}
          grandTotal={data.data.cart.prices.grand_total.value}/>
      </div>
      </div>
    </div>
    }
  </div>
}