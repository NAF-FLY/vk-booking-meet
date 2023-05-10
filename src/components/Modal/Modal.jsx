import { IoMdClose } from 'react-icons/io'

import './modal.css'

const Modal = ({ active, setActive }) => {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={e => e.stopPropagation()}
			>
				<div className='modal__header'>
					<h2>Уведомление</h2>
					<IoMdClose
						onClick={() => setActive(false)}
						style={{ cursor: 'pointer', width: 23, height: 23 }}
					/>
				</div>
				<div className='modal__main-content'>
					<img
						src='./src/assets/success.svg'
						alt='success'
						className='modal__success-icon'
					/>
					<p className='modal__main-text'>
						Поздравляем! Вы успешно забронировали переговорную
					</p>
				</div>
			</div>
		</div>
	)
}
export default Modal
