import styles from './CartMini.module.scss'
import defaultImage from '../../assets/imgPng/5.png'

const data = [
  {
    img: '',
    brand: 'Trex',
    name: 'TimberTech Driftwood',
    price: '99.00'
  },
  {
    img: '',
    brand: 'Trex',
    name: 'TimberTech Driftwood',
    price: '99.00'
  },
]

export default function CartMini() {
  return <div className={styles.mainContainer}>
    <div className={styles.cartMini__title}>Order summary</div>
    <div className={styles.cartItemBox}>
      {data.map(
          (item, index)=> <div key={index} className={styles.cartItem}>
          <img className={styles.img} src={item.img? item.img : defaultImage} alt='product'/>
          <div className={styles.cartItem__info}>
            <div className={styles.cartItem__textBox}>
              <div className={styles.brandColor}>{item.brand}</div>
              <div>{item.name}</div>
            </div>
            <div className={styles.price}>${item.price}</div>
          </div>
          </div>
      )}
    </div>
    <div className={styles.cartSubtotal}>
      <div className={styles.cartSubtotal__text}>Order subtotal</div>
      <div className={styles.cartSubtotal__price}>$198.00</div>
    </div>
  </div>
}