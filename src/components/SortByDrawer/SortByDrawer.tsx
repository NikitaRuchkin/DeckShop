import {Drawer} from "@mui/material";
import cn from 'clsx'
import styles from './SortByDrawer.module.scss'
import Button from "../button/Button";
import {ButtonSimpleType, ButtonType} from "../../shared/types/ButtonTypes";
import ButtonSimple from "../ButtonSimple/ButtonSimple";

interface IProp {
	isOpen: boolean;
	closeFn: ()=> void
}

const btnsSort = [
	<ButtonSimple type={ButtonSimpleType.large} text='Default' imageClassName='icon-default-list'/>,
	<ButtonSimple type={ButtonSimpleType.large} text='Low to high' subTitle='Low to high' imageClassName='icon-low-high'/>,
	<ButtonSimple type={ButtonSimpleType.large} text='High to low' subTitle='High to low' imageClassName='icon-high-low'/>,
	<ButtonSimple type={ButtonSimpleType.large} text='A to Z' subTitle='A to Z' imageClassName='icon-a-z'/>,
	<ButtonSimple type={ButtonSimpleType.large} text='Z to A' subTitle='Z to A' imageClassName='icon-z-a'/>,
]

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
					{btnsSort.map(
							(item, index)=> <div key={index} onClick={setSortBy}>
								{item}
								{/*<div>*/}
								{/*	<div className={styles.sortByDrawer__body_text}>{item.filter}</div>*/}
								{/*	<div className={styles.sortByDrawer__body_description}>{item.description}</div>*/}
								{/*</div>*/}
								{/*<div className={cn(item.icon, styles.sortByDrawer__body_icon)}/>*/}
							</div>
					)}
				</div>
			</div>
		</Drawer>
	</div>
}