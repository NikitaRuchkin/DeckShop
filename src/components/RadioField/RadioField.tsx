import styles from './RadioField.module.scss'

interface IProp {
	change: ()=> void
}

export default function RadioField({change}:IProp) {
	return <div className={styles.radioField}>
		<input type='radio' className={styles.radioField__radio} onChange={change}/>
	</div>
}