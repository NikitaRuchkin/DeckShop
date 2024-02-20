import {Drawer} from "@mui/material";
import styles from './FilterDrawer.module.scss'
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import Checkbox from "../Checkbox/Checkbox";

interface IProp {
	isOpen: boolean;
	closeFn: ()=> void
}

const data = [
	{
		name: 'Brands',
		filters: [
			'AZEK',
			'TimberTech',
			'Trex',
			'fiberon',
		]
	}
]

export default function FilterDrawer({isOpen, closeFn}:IProp) {
	const applyFilter = ()=> {
		closeFn()
	}

	return <div>
		<Drawer
				style={{height: 'auto'}}
				anchor={'right'}
				open={isOpen}
				onClose={closeFn}
		>
			<div className={styles.filterDrawer}>
				<div>
					<div className={styles.filterDrawer__header}>
						<div className={styles.filterDrawer__header_text}>Filters</div>
						<Button click={closeFn} type={ButtonType.White} imageClassName={'icon-cross'} fontSize={16}/>
					</div>
					<div className={styles.filterDrawer__body}>
						{data && data.map(
								(item, index)=> <div key={index} className={styles.filterDrawer__body_filterBox}>
									<div className={styles.filterDrawer__body_title}>{item.name}</div>
									<div>
										{item.filters && item.filters.map(
												(item, index)=> <div key={index} className={styles.filterDrawer__body_filters}>
													<Checkbox/>
													<div className={styles.filterDrawer__body_text}>{item}</div>
												</div>
										)}
									</div>
								</div>
						)}
					</div>
				</div>
				<div className={styles.filterDrawer__footer}>
					<Button type={ButtonType.Blue} click={applyFilter} text='Apply filter' imageClassName='icon-check' />
					<Button type={ButtonType.White} click={closeFn} text='Discard' imageClassName='icon-cross' />
				</div>
			</div>
		</Drawer>
	</div>
}