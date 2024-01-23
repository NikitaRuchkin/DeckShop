import styles from './SupportInfo.module.scss'
import cn from "clsx";
import BadgeSimple from "../badgeSimple/BadgeSimple";
import SupportImage from '../../assets/img/Support.png'
import SupportImage2 from '../../assets/img/Support2.png'

export default function SupportInfo() {
	return <div>
		<div className={cn(styles.support__infoBlock, styles.support__infoBlockPaddingLeft, styles.marginBottom16)}>
			<div className={styles.support__infoBlockFlex}>
				<div className={styles.support__infoBlockSize}>
					<div><BadgeSimple text={'About us'} blue={true}/></div>
					<div className={styles.support__infoBlock__title}>
						We're a dedicated team of design enthusiasts and materials connoisseurs
					</div>
					<div className={styles.support__infoBlock__additionalText}>
						We're all about providing the best decking materials and accessories to make your DIY deck project
						shine. Our passion lies in sourcing top-tier materials to empower your creative side.
					</div>
				</div>
				<img src={SupportImage} alt='support image'/>
			</div>
		</div>
		<div className={cn(styles.support__infoBlock, styles.support__infoBlockPaddingRight)}>
			<div className={styles.support__infoBlockFlex}>
				<img src={SupportImage2} alt='support image'/>
				<div className={styles.support__infoBlockSize}>
					<div><BadgeSimple text={'How we operate'} blue={true}/></div>
					<div className={styles.support__infoBlock__title}>
						Our daily mission revolves around connecting you with top-quality decking materials
					</div>
					<div className={styles.support__infoBlock__additionalText}>
						We're in constant collaboration with suppliers to bring you a wide range of options, from composites
						to wood, all carefully selected to fuel your DIY deck ambitions and ensure your project's success.
					</div>
				</div>
			</div>
		</div>
	</div>
}