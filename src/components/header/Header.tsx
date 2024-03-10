import {useState} from 'react'
import styles from './Header.module.scss'
import cn from 'clsx'
import Button from "../button/Button";
import ButtonPrimary from "../buttonPrimary/ButtonPrimary";
import {useDispatch, useSelector} from "react-redux";

import {getShowDrawer, setShowDrawer} from "../../store/reducers/RegisterDrawer/RegisterDrawer";
import {getUserInfoState, getUserTokenCartState, getUserTokenState} from "../../store/reducers/user/UserReducer";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {RootState} from "../../store/store";
import {Link} from "react-router-dom";
import RegisterDrawer from "../RegisterDrawer/RegisterDrawer";
import MenuPopup from "../MenuPopup/MenuPopup";

export default function Header() {
  const token = useSelector((state: RootState)=>getUserTokenState(state))
  const user = useSelector((state: RootState)=>getUserInfoState(state.UserReducer))
  const showRegisterDrawer = useSelector((state: RootState)=>getShowDrawer(state))
  const dispatch = useDispatch()
  
  const [showPopupMenu, setShowPopupMenu] = useState<Boolean>(false)

  const setDrawer = ()=> {
    dispatch(setShowDrawer(true))
  }
  return (
      <header className={styles.header}>
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <div className={cn(styles.flexBox, styles.flexBasis)}>
              <Link to={'/'} className={cn(styles.flexBox, styles.link)}>
                <div className={styles.logo} />
                <div className={styles.companyName}>DECK <br/> SHOP</div>
              </Link>
              <div className={styles.flexBox}>
                <ButtonPrimary text={'Catalog'} imageClassName={'icon-chevron-bottom'} fontSize={12}/>
                <ButtonPrimary text={'Support'} link={'/support'}/>
              </div>
            </div>
            <div className={cn(styles.inputContainer, styles.flexBasis)}>
              <div className={cn('icon-search', styles.imageSearch)}/>
              <input  className={styles.inputContainer__input} placeholder='Search for products'/>
            </div>
            <div className={cn(styles.flexBox, styles.flexBasis, styles.flexBoxEnd, styles.positionRelative)}>
              <div className={styles.buttonMargin}>
                <Button text={'Cart'} type={ButtonType.White} imageClassName={'icon-cart'} fontSize={16} link={'/cart'}/>
              </div>
              {token &&
                  <div onMouseEnter={()=>setShowPopupMenu(true)}
                       onMouseLeave={()=> setShowPopupMenu(false)}
                  >
                    <Button
                      type={ButtonType.Blue}
                      imageClassName={'icon-user'}
                      text={`Welcome, ${user.name}`}
                      fontSize={16}
                    />
                    {showPopupMenu && <div className={styles.inputContainer__popup}><MenuPopup click={setShowPopupMenu}/></div>}
                  </div>
              }
              {!token &&
                  <Button
                      type={ButtonType.Blue}
                      imageClassName={'icon-user'}
                      fontSize={16}
                      click={setDrawer}/>
              }
            </div>
          </div>
          <RegisterDrawer/>
        </div>
      </header>
  )
}
