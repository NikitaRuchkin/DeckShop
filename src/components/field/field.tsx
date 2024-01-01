import styles from './field.module.scss'
import {ChangeEvent} from "react";

interface IProp {
  placeHolder: string;
  onChange: (e: ChangeEvent)=> void;
  title?: string;
}

export default function Field({placeHolder, onChange, title}:IProp) {
  return <div>
    {title && <div className={styles.field__title}>{title}</div>}
    <input className={styles.field} placeholder={placeHolder} onChange={(e)=>{onChange(e)}}/>
  </div>
}