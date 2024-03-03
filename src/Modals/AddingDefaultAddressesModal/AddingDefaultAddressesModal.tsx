import cn from 'clsx'
import styles from './AddingDefaultAddressesModal.module.scss'
import ModalWrapper from "../../hocs/ModalWrapper/ModalWrapper";
import {Dialog} from "@mui/material";
import Field from "../../components/field/field";

interface IProp {
	open: boolean;
	closeFn: ()=> void;
	edit?: boolean;
}

export default function AddingDefaultAddressesModal({open, closeFn, edit}:IProp) {
	return <div>
		<Dialog
				PaperProps={{ sx: { borderRadius: '24px' } }}
				maxWidth={'xl'}
				scroll={'body'}
				open={open}
				onClose={closeFn}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
		>
			<div className={styles.modal__position}>
				<ModalWrapper
						title={edit? 'Editing default addresses' : 'Adding default addresses'}
						titleIcon='icon-house'
						applyText={edit? 'Save changes' : 'Add default addresses'}
						applyIcon={edit? 'icon-cross' : 'icon-plus'}
						applyClick={()=>{}}
						cancelText={edit? 'Cancel editing' : 'Discard'}
						cancelIcon='icon-cross'
						cancelClick={closeFn}
				>
					<div className={styles.modal__mainContainer}>
						<div className={styles.modal__title}>
							<div className={cn('icon-truck', styles.modal__iconTitle)}/>
							<div>Shipping address</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your first name' onChange={()=>{}} title='First name' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your last name' onChange={()=>{}} title='Last name' />
							</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Canada' onChange={()=>{}} title='Country' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='+1' onChange={()=>{}} title='Phone number' />
							</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your city' onChange={()=>{}} title='City' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your province' onChange={()=>{}} title='Province' />
							</div>
						</div>

						<div className={cn(styles.modal__fieldContainer, styles.modal__borderBottom)}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 1' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 2' />
							</div>
						</div>

						<div className={styles.modal__title}>
							<div className={cn('icon-truck', styles.modal__iconTitle)}/>
							<div>Shipping address</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 1' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 2' />
							</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 1' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 2' />
							</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 1' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 2' />
							</div>
						</div>

						<div className={styles.modal__fieldContainer}>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 1' />
							</div>
							<div className={styles.modal__fieldWidth}>
								<Field name={'name'} type={'text'} placeHolder='Enter your address' onChange={()=>{}} title='Address line 2' />
							</div>
						</div>
					</div>
				</ModalWrapper>
			</div>
		</Dialog>
	</div>
}