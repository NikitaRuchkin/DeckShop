import styles from './Error.module.scss'
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

export default function Error() {
    return <div className={styles.mainContainer}>
       <div className={styles.errorPage}>
           <div className={styles.code}>404</div>
           <div className={styles.text}>
               It looks like the page you were
               <br/>
               trying to access does not exist :(
           </div>
           <div className={styles.textSmall}>Try using search or go to the home page and start your journey once again.</div>
           <div className={styles.buttons}>
               <Button text={'To catalog'} type={ButtonType.Blue} imageClassName={'icon-arrow-right'} fontSize={16} link={'/catalog'}/>
               <div className={styles.btnMargin}>
                <Button text={'To home page'} imageClassName={'icon-house'} fontSize={16} type={ButtonType.White} link={'/'}/>
               </div>
           </div>
       </div>
    </div>
}