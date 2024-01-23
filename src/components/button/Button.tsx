import styles from './Button.module.scss'
import cn from 'clsx'
import {ButtonType} from "../../shared/types/ButtonTypes";
import {Link} from "react-router-dom";

interface IButtonProps {
    text?: string;
    fontSize?: number;
    type?: ButtonType;
    imageClassName?: string;
    link?: string;
    href?: string;
}

function Button ({text, type, imageClassName, fontSize, link, href }: IButtonProps) {
    if(link) {
        return <Link
            to={link}
            className={cn(styles.main,
                !type? styles.main__blue : styles.main__white,
                !text && styles.imagePadding)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </Link>
    }

    if(href) {
        return <a href={href}
            className={cn(styles.main,
                !type? styles.main__blue : styles.main__white,
                !text && styles.imagePadding)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </a>
    }
    return <div
        className={cn(styles.main,
            !type? styles.main__blue : styles.main__white,
            !text && styles.imagePadding)}
    >
        {text && <div className={cn(styles.text)}>
            {text}
        </div>}
        {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
    </div>
}

export default Button