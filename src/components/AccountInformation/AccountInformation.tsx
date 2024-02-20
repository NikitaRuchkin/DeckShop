import cn from 'clsx'
import styles from './AccountInformation.module.scss'
import {useState} from "react";
import AccountCardWrapperPrimary from "../../hocs/AccountCardWrapperPrimary/AccountCardWrapperPrimary";
import AccountUserInfo from "../AccountUserInfo/AccountUserInfo";
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Checkbox from "../Checkbox/Checkbox";

interface IProp {
  smallVariant?: boolean;
}

export default function AccountInformation({smallVariant = false}: IProp) {
  const [showPassword, setShowPassword] = useState(false)
  return <div>
    <AccountCardWrapperPrimary
        title={<div className={styles.accountInformation__title}>
          <div className={cn('icon-user', styles.accountInformation__iconTitle)}/>Account information
        </div>}
        buttonText={'Edit contact information'}
        buttonIcon={'icon-pencil'}
    >
      <div>
        {!smallVariant && <div>
          <div className={styles.accTitle__title}>
            <div className={styles.accTitle__title__titleContainer}>
              <div className={cn('icon-lock', styles.accTitle__title__icon)}/>
              <div className={styles.accTitle__title__text}>Login credentials</div>
            </div>
          </div>
          <div className={styles.accountInformation__containerInfo}>
            <div className={styles.accountInformation__password}>Password</div>
            <div className={styles.accountInformation__changePass}>
              <div className={styles.accountInformation__hiddenPassContainer}>
                {showPassword?
                    <div className={styles.accountInformation__hiddenPass}>qwerty</div>
                    :
                    <div className={styles.accountInformation__hiddenPass}>••••••••••••••••</div>
                }
                <div className={cn(showPassword? 'icon-slashed-eye' : 'icon-eye', styles.accountInformation__eyeIcon)} onClick={()=>setShowPassword(!showPassword)}/>
              </div>
              <div><Button type={ButtonType.White} text='Change' click={()=>{}} imageClassName='icon-pencil'/></div>
            </div>
          </div>
          <div className={styles.accountInformation__containerInfo}>
            <div className={styles.accountInformation__password}>Email address</div>
            <div className={styles.accountInformation__changePass}>
              <div className={styles.accountInformation__hiddenPassContainer}>
                <div className={styles.accountInformation__hiddenPass}>igor.uix@gmail.com</div>
              </div>
              <div><Button type={ButtonType.White} text='Change' click={()=>{}} imageClassName='icon-pencil'/></div>
            </div>
          </div>
          <div className={styles.accountInformation__email}>
            <div className={cn(styles.accTitle__title, styles.accTitle__title_borderNone)}>
              <div className={styles.accTitle__title__titleContainer}>
                <div className={cn('icon-envelope', styles.accTitle__title__icon)}/>
                <div className={styles.accTitle__title__text}>Email preferences</div>
              </div>
            </div>
            <div className={styles.accTitle__title__checkBox}>
              <div className={styles.accTitle__title__checkBoxInput}><Checkbox/></div>
              <div className={styles.accTitle__title__checkBoxText}>Subscribe to newsletter</div>
            </div>
          </div>
        </div>}
        <div className={styles.accTitle__title}>
          <div className={styles.accTitle__title__titleContainer}>
            <div className={cn('icon-address', styles.accTitle__title__icon)}/>
            <div className={styles.accTitle__title__text}>Contact information</div>
          </div>
        </div>
        <AccountUserInfo name='Igor' lastName='Yashkin' phoneNumber='234567890' />
      </div>
    </AccountCardWrapperPrimary>
  </div>
}

// <div className={styles.accountInformation__infoContainer}>
//   <div>
//     <div className={styles.accountInformation__semiTitle}>Contact information</div>
//     <div className={styles.accountInformation__infoBlock}>
//       <div className={styles.accountInformation__text}>Name</div>
//       <div className={styles.accountInformation__editableFields}>Igor Yashkin</div>
//     </div>
//     <div className={styles.accountInformation__infoBlock}>
//       <div className={styles.accountInformation__text}>Email</div>
//       <div className={styles.accountInformation__editableFields}>igor.uix@gmail.com</div>
//     </div>
//     <div className={styles.accountInformation__infoBlock}>
//       <div className={styles.accountInformation__text}>Phone number</div>
//       <div className={styles.accountInformation__editableFields}>1234567890</div>
//     </div>
//     <div className={cn(styles.accountInformation__infoBlock, styles.accountInformation__borderBottom)}>
//       <div className={styles.accountInformation__text}>Password</div>
//       <div className={styles.accountInformation__editableFields}>
//         {showPassword?
//             <div className={styles.password}>qwerty</div>
//             :
//             <div className={styles.password}>••••••••••••••••</div>
//         }
//         <div className={cn(showPassword? 'icon-slashed-eye' : 'icon-eye', styles.icon)} onClick={()=>setShowPassword(!showPassword)}/>
//       </div>
//     </div>
//   </div>
//   <div>
//     <div className={styles.accountInformation__semiTitle}>Email preferences</div>
//     <div className={styles.accountInformation__infoBlock}>
//       <div className={styles.accountInformation__text}>Order and status to updates</div>
//       <div><Checkbox /></div>
//     </div>
//     <div className={cn(styles.accountInformation__infoBlock, styles.accountInformation__borderBottom)}>
//       <div className={styles.accountInformation__text}>Subscribe to newsletter</div>
//       <div>
//         <Checkbox />
//       </div>
//     </div>
//   </div>
// </div>