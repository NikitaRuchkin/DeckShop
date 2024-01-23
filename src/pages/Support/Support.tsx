import styles from './Support.module.scss'
import SupportInfo from "../../components/SupportInfo/SupportInfo";
import SupportAnswers from "../../components/SupportAnswers/SupportAnswers";
import SupportQuestion from "../../components/SupportQuestion/SupportQuestion";

//TODO test global styles
export default function Support() {
	return <div className='defaultContainer'>
		<div className={styles.mainContainer}>
			<SupportInfo/>
			<SupportAnswers/>
			<SupportQuestion/>
		</div>
	</div>
}