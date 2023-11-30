import styles from './Header.module.scss'
import cn from 'clsx'
import Button from "../button/Button";
import ButtonPrimary from "../buttonPrimary/ButtonPrimary";
import {ButtonType} from "../../shared/types/ButtonTypes";

export default function Header() {
    return (
        <header>
            <div className={styles.mainContainer}>
                <div className={styles.main}>
                    <div className={cn(styles.flexBox, styles.flexBasis)}>
                        <div className={styles.logo} />
                        <div className={styles.companyName}>DECK <br/> SHOP</div>
                        <div className={styles.flexBox}>
                            <ButtonPrimary text={'Catalog'} imageClassName={'icon-chevron-bottom'} fontSize={12}/>
                            <ButtonPrimary text={'Support'}/>
                        </div>
                    </div>
                    <div className={cn(styles.inputContainer, styles.flexBasis)}>
                        <div className={cn('icon-search', styles.imageSearch)}/>
                        <input  className={styles.inputContainer__input} placeholder='Search for products'/>
                    </div>
                    <div className={cn(styles.flexBox, styles.flexBasis, styles.flexBoxEnd)}>
                        <div className={styles.buttonMargin}>
                            <Button text={'Cart'} type={ButtonType.White} imageClassName={'icon-cart'} fontSize={16}/>
                        </div>
                        <Button type={ButtonType.Blue} imageClassName={'icon-user'} fontSize={16}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
