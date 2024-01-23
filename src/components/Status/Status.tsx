import styles from './Status.module.scss'
import cn from "clsx";

interface IProp {
	status: string;
}

export default function Status({status}:IProp) {
	if(status === 'In delivery') {
		return <div className={cn(styles.status, styles.delivery)}>
			{status}
		</div>
	}
	if(status === 'Delivered') {
		return <div className={cn(styles.status, styles.delivered)}>
			{status}
		</div>
	}
	if(status === 'Pending') {
		return <div className={cn(styles.status, styles.pending)}>
			{status}
		</div>
	} else {
		//Cancelled
		return <div className={cn(styles.status, styles.cancelled)}>
			{status}
		</div>
	}
}