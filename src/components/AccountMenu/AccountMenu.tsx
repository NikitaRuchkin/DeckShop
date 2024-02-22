import styles from './AccountMenu.module.scss'
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteToken} from '../../store/reducers/user/UserReducer'
import {menuButtonsArray} from "../MenuPopup/MenuPopup";
import {ButtonSimpleType} from "../../shared/types/ButtonTypes";

export default function AccountMenu() {
  const location = useLocation()
  const dispatch = useDispatch()

  const buttons = menuButtonsArray(location, ButtonSimpleType.large)
  // const checkCaps = (event: any) => {
  //   if (event.getModifierState("CapsLock")) {
  //     console.log('CAPS')
  //   } else {
  //     console.log('no caps')
  //   }
  // }
  return <div className={styles.mainContainer}>
    <div className={styles.menu}>Menu</div>
    {buttons.map(
        (item, index)=> <div key={index} onClick={()=> {
          if(index === buttons.length-1) {
            dispatch(deleteToken())
          }
        }}>
          {item}
        </div>
    )}
  </div>
}