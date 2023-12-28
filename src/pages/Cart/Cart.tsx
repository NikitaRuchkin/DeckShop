import styles from './Cart.module.scss'
import CartMedium from "../../components/cartMedium/CartMedium";
import {Key} from "react";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const data = [
  {
    img: '',
    brand: 'Trex',
    name: 'TimberTech Driftwood',
    amount: 1,
    price: '99.00',
    color: 'Oak Grey',
    width: '12 in',
    profile: 'Grooved'
  },
  {
    img: '',
    brand: 'Trex',
    name: 'TimberTech Driftwood',
    amount: 1,
    price: '99.00',
    color: 'Oak Grey',
    width: '12 in',
    profile: 'Grooved'
  },
  {
    img: '',
    brand: 'Trex',
    name: 'TimberTech Driftwood',
    amount: 1,
    price: '99.00',
    color: 'Oak Grey',
    width: '12 in',
    profile: 'Grooved'
  },
]

export default function Cart() {
  return <div className={styles.mainContainer}>
    <div className={styles.title}>Your shopping cart</div>
    <div className={styles.containerContent}>
      <div>
        {data.map(
            (item, index: Key)=> <div key={index} className={styles.cartBox}>
              <CartMedium {...item} />
            </div>
        )}
      </div>
      <div>
        <OrderSummary/>
      </div>
    </div>
  </div>
}