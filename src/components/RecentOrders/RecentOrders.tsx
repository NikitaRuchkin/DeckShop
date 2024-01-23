import * as React from 'react';
import cn from 'clsx'
import styles from './RecentOrders.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ReactElement} from "react";
import Status from "../Status/Status";

function createData(
		OrderID: string,
		Date: string,
		ShipTo: string,
		Total: string,
		Status: ReactElement,
) {
	return { OrderID, Date, ShipTo, Total, Status };
}

const rows = [
	createData('000000001', '10/6/23', 'customer test', '$354.00', <Status status={'In delivery'}/>),
	createData('000000002', '10/15/23', 'customer test', '$354.00', <Status status={'Delivered'}/> ),
	createData('000000003', '10/21/23', 'customer test', '$354.00', <Status status={'Pending'}/>),
	createData('000000004', '10/22/23', 'customer test', '$354.00', <Status status={'Cancelled'}/>),
];

export default function RecentOrders() {
	return (
			<TableContainer component={Paper} style={{boxShadow: 'none', borderBottom: '1px solid #C0C7D4', borderRadius: '0px'}} className={styles.table__container}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell padding={'none'} align="left" width={358}>Order ID</TableCell>
							<TableCell align="center" width={156}>Date</TableCell>
							<TableCell align="center" width={156}>Ship to</TableCell>
							<TableCell align="center" width={156}>Total</TableCell>
							<TableCell align="center" width={156}>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
								<TableRow
										key={row.OrderID}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell padding={'none'}>
										<div className={cn(styles.table__container, styles.table__horizontalAlignLeft)}>
											{row.OrderID}
										</div>
									</TableCell>
									<TableCell align="center">
										<div className={styles.table__container}>
											{row.Date}
										</div>
									</TableCell>
									<TableCell align="center">
										<div className={styles.table__container}>
												{row.ShipTo}
										</div>
									</TableCell>
									<TableCell align="center">
										<div className={styles.table__container}>
											{row.Total}
										</div>
									</TableCell>
									<TableCell align="center">
										<div className={styles.table__container}>
											{row.Status}
										</div>
									</TableCell>
								</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
	);
}