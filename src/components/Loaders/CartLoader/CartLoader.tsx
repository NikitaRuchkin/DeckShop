import React from "react"
import ContentLoader from "react-content-loader"
import styles from './CartLoader.module.scss'

export default function CartLoader() {
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
			<rect x="0" y="0" rx="16" ry="16" width="360" height="48" fill={'#f3f3f3'}/>
			<rect x="0" y="80" rx="16" ry="16" width="944" height="312" fill={'#f3f3f3'}/>
			<rect x="960" y="80" rx="16" ry="16" width="464" height="368" fill={'#f3f3f3'}/>
			<rect x="0" y="408" rx="16" ry="16" width="944" height="312" fill={'#f3f3f3'}/>
			<rect x="0" y="736" rx="16" ry="16" width="944" height="312" fill={'#f3f3f3'}/>
		</ContentLoader>
	</div>
}