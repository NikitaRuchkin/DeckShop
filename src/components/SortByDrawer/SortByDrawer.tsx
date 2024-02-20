import {Drawer} from "@mui/material";
import cn from 'clsx'
import styles from './SortByDrawer.module.scss'
import Button from "../button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";

interface IProp {
	isOpen: boolean;
	closeFn: ()=> void
}

const sortByData = [
	{
		filter: 'Default',
		icon: 'icon-default-list',
		id: 0,
	},
	{
		filter: 'Price',
		description: 'Low to high',
		icon: 'icon-low-high',
		id: 1,
	},
	{
		filter: 'Price',
		description: 'High to low',
		icon: 'icon-high-low',
		id: 2,
	},
	{
		filter: 'Name',
		description: 'Z to A',
		icon: 'icon-a-z',
		id: 3,
	},
	{
		filter: 'Price',
		description: 'Z to A',
		icon: 'icon-z-a',
		id: 4,
	},
]

export default function SortByDrawer({isOpen, closeFn}:IProp) {
	const setSortBy = ()=> {
		closeFn()
	}

	return <div>
		<Drawer
				style={{height: 'auto'}}
				anchor={'right'}
				open={isOpen}
				onClose={closeFn}
		>
			<div className={styles.sortByDrawer}>
				<div className={styles.sortByDrawer__header}>
					<div className={styles.sortByDrawer__header_text}>Sort by</div>
					<Button click={closeFn} type={ButtonType.White} imageClassName={'icon-cross'} fontSize={16}/>
				</div>
				<div>
					{sortByData.map(
							(item)=> <div key={item.id} className={styles.sortByDrawer__body} onClick={setSortBy}>
								<div>
									<div className={styles.sortByDrawer__body_text}>{item.filter}</div>
									<div className={styles.sortByDrawer__body_description}>{item.description}</div>
								</div>
								<div className={cn(item.icon, styles.sortByDrawer__body_icon)}/>
							</div>
					)}
				</div>
			</div>
		</Drawer>
	</div>
}