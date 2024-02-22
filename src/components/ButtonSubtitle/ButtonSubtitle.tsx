import styles from './ButtonSubtitle.module.scss'
import {ButtonType} from "../../shared/types/ButtonTypes";

interface IProp {
	text?: string;
	fontSize?: number;
	type?: ButtonType;
	imageClassName?: string;
	link?: string;
	href?: string;
	click?: ()=> void;
}

export default function ButtonSubtitle() {
	return <div>

	</div>
}