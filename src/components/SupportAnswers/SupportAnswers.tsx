import styles from './SupportAnswers.module.scss'
import BadgeSimple from "../badgeSimple/BadgeSimple";
import SupportBanner from "../SupportBanner/SupportBanner";

const data = [
	{
		title: 'What decking materials do you sell?',
		text: 'We offer a wide variety of decking materials, including high-quality composites ' +
				'and traditional wood options, all designed for DIY enthusiasts.'
	},
	{
		title: 'How do you ensure the quality of your materials?',
		text: 'We take quality seriously. Our team collaborates with reputable suppliers and performs rigorous checks' +
				' to ensure the materials you receive are top-notch for your project.'
	},
	{
		title: 'Is international shipping available?',
		text: 'Currently, we provide shipping within Canada and United States. We ensure secure' +
				' and prompt delivery to your doorstep.'
	},
	{
		title: 'What\'s the average delivery time for orders?',
		text: 'Typically, you can expect your materials to arrive within 12 business days, depending on your ' +
				'location. We strive to get your supplies to you as quickly as possible.'
	},
]

export default function SupportAnswers() {
	return <div className={styles.supportAnswers}>
		<div>
			<BadgeSimple text='Didn’t find information?' blue={true}/>
		</div>
		<div className={styles.supportAnswers__title}>Frequently asked questions</div>
		<div className={styles.supportAnswers__banners}>
			{data.map(
					(item, index)=> <div key={index}>
							<SupportBanner text={item.text} title={item.title}/>
						</div>
			)}
		</div>
	</div>
}