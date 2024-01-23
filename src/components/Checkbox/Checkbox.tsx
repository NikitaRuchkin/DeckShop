import styles from './Checkbox.module.scss'

export default function Checkbox() {
  return <input className={styles.mainContainer} type="checkbox" onChange={(e)=> console.log(e)}/>
}