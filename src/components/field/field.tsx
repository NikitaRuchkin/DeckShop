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
  width?: number;
  value?: string | number;
  disabled?: boolean;
  onBlur?: (e: string)=> void;
}

export default function Field({placeHolder, onChange, title, error, type, name, register, width, value, disabled, onBlur}:IProp) {
  return <div>
    {title && <div className={styles.field__title}>
      <div>{title}</div>
      {error && <div className={styles.field__errorText}>{error}</div>}
    </div>}
    <input
      {...register}
      name={name}
      className={cn(styles.field, error? styles.field__error : null, disabled && styles.field__disabled)}
      placeholder={placeHolder}
      onChange={onChange? (e)=>{onChange(e.target.value)} : null}
      onBlur={onBlur? (e)=>{onBlur(e.target.value)} : null}
      type={type}
      style={width && {width: `${width}px`}}
      value={value && value}
      disabled={disabled}
    />
  </div>
}