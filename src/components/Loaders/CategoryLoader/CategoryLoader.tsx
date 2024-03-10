import React from "react"
import ContentLoader from "react-content-loader"
import styles from './CategoryLoader.module.scss'

export default function CategoryLoader() {
	return <div className={styles.mainContainer}>
		<ContentLoader
			animate={true}
			speed={20}
			width={1424}
			height={1070}
			gradientDirection={'left-right'}
			interval={2}
			viewBox="0 0 1424 1070"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="0" rx="16" ry="16" width="126" height="32" fill={'#f3f3f3'}/>
			<rect x="0" y="56" rx="16" ry="16" width="450" height="48" fill={'#f3f3f3'}/>
			
			<rect x="0" y="134" rx="16" ry="16" width="112" height="48" fill={'#f3f3f3'}/>
			<rect x="1312" y="134" rx="16" ry="16" width="112" height="48" fill={'#f3f3f3'}/>
			
			<rect x="0" y="206" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="360" y="206" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="720" y="206" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="1080" y="206" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			
			<rect x="0" y="646" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="360" y="646" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="720" y="646" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="1080" y="646" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
		</ContentLoader>
	</div>
}