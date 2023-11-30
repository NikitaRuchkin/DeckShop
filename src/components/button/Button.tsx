import styles from './Button.module.scss'
import cn from 'clsx'
import {ButtonType} from "../../shared/types/ButtonTypes";

interface IButtonProps {
    text?: string;
    fontSize?: number;
    heightImage?: number;
    type?: ButtonType;
    imageClassName?: string;
}

function Button ({text, type, imageClassName, fontSize }: IButtonProps) {
    return (
        <div
            className={cn(styles.main,
            !type? styles.main__blue : styles.main__white,
                !text && styles.imagePadding)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </div>
    )
}

export default Button