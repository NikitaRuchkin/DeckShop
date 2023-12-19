import styles from './CyrcleButton.module.scss'
import cn from 'clsx'

interface IProp {
    icon: string;
    disabled?: boolean;
    click: ()=> void
}

export default function CircleButton({icon, disabled = false, click}:IProp) {
    return <div className={cn(styles.buttonStyle, icon, disabled && styles.disabled)} onClick={disabled? ()=>{} :click}/>
}