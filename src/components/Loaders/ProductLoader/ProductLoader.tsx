import React from "react"
import ContentLoader from "react-content-loader"
import styles from './ProductLoader.module.scss'

export default function ProductLoader() {
	return <div className={styles.mainContainer}>
		<ContentLoader
			speed={20}
			width={1424}
			height={1070}
			gradientDirection={'left-right'}
			interval={2}
			viewBox="0 0 1424 1070"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			// backgroundColor={'#333'}
			// foregroundColor={'#999'}
		>
			<rect x="0" y="0" rx="16" ry="16" width="360" height="32" fill={'#f3f3f3'}/>
			<rect x="0" y="56" rx="16" ry="16" width="584" height="584" fill={'#f3f3f3'}/>
			<rect x="720" y="56" rx="16" ry="16" width="704" height="900" fill={'#f3f3f3'}/>
		</ContentLoader>
	</div>
}