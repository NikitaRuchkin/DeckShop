import {Drawer} from "@mui/material";
import cn from 'clsx'
import styles from './SortByDrawer.module.scss'
import Button from "../button/Button";
import {ButtonSimpleType, ButtonType} from "../../shared/types/ButtonTypes";
import ButtonSimple from "../ButtonSimple/ButtonSimple";
import {ISort} from "../../pages/Category/Category";

interface IProp {
	isOpen: boolean;
	closeFn: ()=> void;
	setSortCategory: (sort: ISort)=> void
}

export default function SortByDrawer({isOpen, closeFn, setSortCategory}:IProp) {
	const setSortCategoryFn = (sort: ISort) => {
		setSortCategory(sort)
	}
	
	const btnsSort = [
		<ButtonSimple type={ButtonSimpleType.large} text='Default' imageClassName='icon-default-list' click={()=> setSortCategory({name: null, price: null})}/>,
		<ButtonSimple type={ButtonSimpleType.large} text='Price' subTitle='Low to high' imageClassName='icon-low-high' click={()=> setSortCategory({name: null, price: 'ASC'})}/>,
		<ButtonSimple type={ButtonSimpleType.large} text='Price' subTitle='High to low' imageClassName='icon-high-low' click={()=> setSortCategory({name: null, price: 'DESC'})}/>,
		<ButtonSimple type={ButtonSimpleType.large} text='Name' subTitle='A to Z' imageClassName='icon-a-z' click={()=> setSortCategory({name: 'ASC', price: null})}/>,
		<ButtonSimple type={ButtonSimpleType.large} text='Name' subTitle='Z to A' imageClassName='icon-z-a' click={()=> setSortCategory({name: 'DESC', price: null})}/>,
	]

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
							(item, index)=> <div key={index}>
								{item}
					{/*			/!*<div>*!/*/}
					{/*			/!*	<div className={styles.sortByDrawer__body_text}>{item.filter}</div>*!/*/}
					{/*			/!*	<div className={styles.sortByDrawer__body_description}>{item.description}</div>*!/*/}
					{/*			/!*</div>*!/*/}
					{/*			/!*<div className={cn(item.icon, styles.sortByDrawer__body_icon)}/>*!/*/}
							</div>
					)}
					
					{/*	<ButtonSimple type={ButtonSimpleType.large} text='Default' imageClassName='icon-default-list' click={setSortBy} />,*/}
					{/*	<ButtonSimple type={ButtonSimpleType.large} text='Price' subTitle='Low to high' imageClassName='icon-low-high'/>,*/}
					{/*	<ButtonSimple type={ButtonSimpleType.large} text='Price' subTitle='High to low' imageClassName='icon-high-low'/>,*/}
					{/*	<ButtonSimple type={ButtonSimpleType.large} text='Name' subTitle='A to Z' imageClassName='icon-a-z'/>,*/}
					{/*	<ButtonSimple type={ButtonSimpleType.large} text='Name' subTitle='Z to A' imageClassName='icon-z-a'/>,*/}
				</div>
			</div>
		</Drawer>
	</div>
}