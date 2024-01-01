import styles from './CartMini.module.scss'
import defaultImage from '../../assets/imgPng/5.png'

interface IProp {
  extended?: boolean;
}

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

export default function CartMini({extended = false}: IProp) {
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
    {extended && <div className={styles.extendedContainer}>
        <div className={styles.extendedContainer__totalContainer}>
            <div className={styles.extendedContainer__text}>Subtotal</div>
            <div className={styles.extendedContainer__price}>$198.00</div>
        </div>
        <div className={styles.extendedContainer__totalContainerMargins}>
            <div className={styles.extendedContainer__text}>Shipping & Handling</div>
            <div className={styles.extendedContainer__price}>$15.00</div>
        </div>
        <div className={styles.extendedContainer__totalContainer}>
            <div className={styles.extendedContainer__text}>Tax</div>
            <div className={styles.extendedContainer__price}>$39.00</div>
        </div>
    </div>}
    <div className={styles.cartSubtotal}>
      <div className={styles.cartSubtotal__text}>{extended? 'Grand total':'Order subtotal'}</div>
      <div className={styles.cartSubtotal__price}>$198.00</div>
    </div>
  </div>
}