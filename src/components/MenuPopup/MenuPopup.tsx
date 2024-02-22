import styles from './MenuPopup.module.scss'
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import {ButtonSimpleType, ButtonType} from "../../shared/types/ButtonTypes";
import {deleteToken} from "../../store/reducers/user/UserReducer";
import {useDispatch} from "react-redux";
import {useLocation, Location} from "react-router-dom";

interface IProp {
	click: (e: boolean)=> void;
}

export const menuButtonsArray = (location: Location, size: ButtonSimpleType)=> [
	<ButtonMenu
			type={ButtonType.Blue}
			text='Account overview'
			imageClassName='icon-user'
			typeSize={size}
			active={location.pathname === '/account'}
			link='/account'/>,
	<ButtonMenu
			type={ButtonType.Blue}
			text='Order history'
			imageClassName='icon-history'
			typeSize={size}
			active={location.pathname === '/account/orderHistory'}
			link='/account/orderHistory'/>,
	<ButtonMenu
			type={ButtonType.Blue}
			text='Address book'
			imageClassName='icon-book'
			typeSize={size}
			active={location.pathname === '/account/addressBook'}
			link='/account/addressBook'/>,
	<ButtonMenu
			type={ButtonType.Blue}
			text='Stored payment methods'
			imageClassName='icon-card'
			typeSize={size}
			active={location.pathname === '/account/paymentMethod'}
			link='/account/paymentMethod'/>,
	<ButtonMenu
			type={ButtonType.Blue}
			text='Account information'
			imageClassName='icon-user-info'
			typeSize={size}
			active={location.pathname === '/account/accountInfo'}
			link='/account/accountInfo'/>,
	<ButtonMenu
			type={ButtonType.Red}
			text='Log out' imageClassName='icon-log-out'
			typeSize={size}
			link='/'/>
]

export default function MenuPopup({click}: IProp) {
	const location = useLocation()
	const dispatch = useDispatch()
	const buttons = menuButtonsArray(location, ButtonSimpleType.small)

	return <div className={styles.menuPopup}>
		<div className={styles.menuPopup__container}>
			{buttons.map(
					(item, index)=> <div key={index} onClick={()=> {
						if(index === buttons.length-1) {
							dispatch(deleteToken())
						}
						click(false)
					}}>
						{item}
					</div>
			)}
		</div>
	</div>
}