import React from "react"
import ContentLoader from "react-content-loader"
import styles from './CatalogLoader.module.scss'

export default function CatalogLoader() {
	return <div className={styles.mainContainer}>
		<ContentLoader
			animate={true}
			speed={2}
			width={1424}
			height={900}
			gradientDirection={'left-right'}
			interval={2}
			viewBox="0 0 1424 900"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="0" rx="16" ry="16" width="126" height="32" fill={'#f3f3f3'}/>
			<rect x="0" y="56" rx="0" ry="0" width="450" height="48" fill={'#f3f3f3'}/>
			<rect x="0" y="136" rx="16" ry="16" width="344" height="206" fill={'#f3f3f3'}/>
			<rect x="360" y="136" rx="16" ry="16" width="344" height="206" fill={'#f3f3f3'}/>
			<rect x="720" y="136" rx="16" ry="16" width="344" height="206" fill={'#f3f3f3'}/>
			<rect x="1080" y="136" rx="16" ry="16" width="344" height="206" fill={'#f3f3f3'}/>
			<rect x="0" y="384" rx="0" ry="0" width="450" height="48" fill={'#f3f3f3'}/>
			<rect x="0" y="464" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="360" y="464" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="720" y="464" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
			<rect x="1080" y="464" rx="16" ry="16" width="344" height="424" fill={'#f3f3f3'}/>
		</ContentLoader>
	</div>
}