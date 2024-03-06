import cn from 'clsx'
import styles from './field.module.scss'
import {SyntheticEvent} from "react";

interface IProp {
  placeHolder: string;
  onChange: (e: string)=> void;
  title?: string;
  error?: string | undefined;
  type: string;
  name: string;
  register?: any;
}

export default function Field({placeHolder, onChange, title, error, type, name, register}:IProp) {
  return <div>
    {title && <div className={styles.field__title}>
      <div>{title}</div>
      {error && <div className={styles.field__errorText}>{error}</div>}
    </div>}
    <input
      {...register}
      name={name}
      className={cn(styles.field, error? styles.field__error : null)}
      placeholder={placeHolder}
      onChange={(e)=>{onChange(e.target.value)}}
      type={type}
    />
  </div>
}