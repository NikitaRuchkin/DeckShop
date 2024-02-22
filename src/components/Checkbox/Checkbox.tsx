import styles from './Checkbox.module.scss'

interface IProp {
  change?: (e: boolean)=> void;
  defaultValue?: boolean;
}

export default function Checkbox({change, defaultValue = false}:IProp) {
  return <input
      className={styles.mainContainer}
      type="checkbox" onChange={(e)=> change ? change(e.target.checked) : null}
      checked={!!defaultValue}
  />
}