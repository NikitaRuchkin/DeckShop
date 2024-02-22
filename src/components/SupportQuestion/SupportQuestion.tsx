import styles from './SupportQuestion.module.scss'
import BadgeSimple from "../badgeSimple/BadgeSimple";
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

// href={'mailto:mail@htmlacademy.ru'}

export default function SupportQuestion() {
	return <div>
		<BadgeSimple text={'Get in touch'} blue={true}/>
		<div className={styles.support__title}>Have any additional questions?</div>
		<div className={styles.support__additionalText}>
			If you did not find an answer to your question or
			if you have issues with your order, please contact us via email.
		</div>
		<Button text={'Send a letter'} imageClassName={'icon-envelope'} type={ButtonType.Blue} fontSize={16}	href='mailto:bear419000@gmail.com'/>
	</div>
}