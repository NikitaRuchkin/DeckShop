import cn from 'clsx'
import styles from './BillingAddressModal.module.scss'
import ModalWrapper from "../../hocs/ModalWrapper/ModalWrapper";
import {Modal} from "@mui/material";
import Field from "../../components/field/field";

interface IProp {
	open: boolean;
	closeFn: ()=> void;
	edit: boolean;
	billing: boolean;
}

const changeBillingOrShipping = (edit: boolean, billing: boolean) => {
	const data = {
		title: '',
		titleIcon: '',
		applyText: '',
		applyIcon: '',
		cancelText: '',
		cancelIcon: '',
	}

	if(billing) {
		if (edit) {
			data.title = 'Editing default billing address'
			data.titleIcon = 'icon-card'
			data.applyText = 'Save changes'
			data.applyIcon = 'icon-check'
			data.cancelText = 'Cancel editing'
			data.cancelIcon = 'icon-cross'
		} else {
			data.title = 'Adding new billing address'
			data.titleIcon = 'icon-card'
			data.applyText = 'Add billing address'
			data.applyIcon = 'icon-plus'
			data.cancelText = 'Discard'
			data.cancelIcon = 'icon-cross'
		}
	} else if(edit) {
		data.title = 'Editing default shipping address'
		data.titleIcon = 'icon-truck'
		data.applyText = 'Save changes'
		data.applyIcon = 'icon-check'
		data.cancelText = 'Cancel editing'
		data.cancelIcon = 'icon-cross'
	} else {
		data.title = 'Adding new shipping address'
		data.titleIcon = 'icon-truck'
		data.applyText = 'Add shipping address'
		data.applyIcon = 'icon-plus'
		data.cancelText = 'Discard'
		data.cancelIcon = 'icon-cross'
	}


	return data
}

export default function BillingAddressModal({open, closeFn, edit, billing}:IProp) {
	const data = changeBillingOrShipping(edit, billing)

	return <div className={styles.modalEdit__container}>
		<Modal
				open={open}
				onClose={closeFn}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
		>
			<div className={styles.modalEdit__position}>
				<ModalWrapper
						title={data.title}
						titleIcon={data.titleIcon}
						applyText={data.applyText}
						applyIcon={data.applyIcon}
						applyClick={()=>{}}
						cancelText={data.cancelText}
						cancelIcon={data.cancelIcon}
						cancelClick={closeFn}
				>
					<div className={styles.modalEdit__mainContainer}>
						<div className={styles.modalEdit__fieldContainer}>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your first name' onChange={()=>{}} title='First name' />
							</div>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your last name' onChange={()=>{}} title='Last name' />
							</div>
						</div>

						<div className={styles.modalEdit__fieldContainer}>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your first name' onChange={()=>{}} title='First name' />
							</div>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your last name' onChange={()=>{}} title='Last name' />
							</div>
						</div>

						<div className={styles.modalEdit__fieldContainer}>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your first name' onChange={()=>{}} title='First name' />
							</div>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your last name' onChange={()=>{}} title='Last name' />
							</div>
						</div>

						<div className={styles.modalEdit__fieldContainer}>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your first name' onChange={()=>{}} title='First name' />
							</div>
							<div className={styles.modalEdit__fieldWidth}>
								<Field placeHolder='Enter your last name' onChange={()=>{}} title='Last name' />
							</div>
						</div>
					</div>
				</ModalWrapper>
			</div>
		</Modal>
	</div>
}