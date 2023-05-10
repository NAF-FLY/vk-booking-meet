import { useState } from 'react'
import { Form, Formik } from 'formik'
import { FaCalendarAlt } from 'react-icons/fa'
import Select from 'react-select'
import ReactDatePicker from 'react-datepicker'

import {
	floorOptions,
	lastDayOfYear,
	timeOptions,
	towerOptions,
	roomOptions,
} from '../../utils/constants'

import 'react-datepicker/dist/react-datepicker.css'
import customStyles from '../../utils/customStyles'
import styles from './Form.module.css'
import Modal from '../Modal/Modal'

const MyForm = () => {
	const [modalActive, setModalActive] = useState(false)
	return (
		<>
			<Formik
				initialValues={{
					tower: '',
					floor: '',
					room: '',
					date: '',
					time: '',
					comment: '',
				}}
				onSubmit={async (values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2))
						setModalActive(true)
						setSubmitting(false)
					}, 400)
				}}
			>
				{({ values, setFieldValue, resetForm }) => (
					<Form className={styles.form}>
						<div className={styles.inputs__wrapper}>
							<Select
								options={towerOptions}
								styles={customStyles}
								value={values.tower}
								onChange={value => setFieldValue('tower', value)}
								placeholder='Выбор башни'
								required
							/>
							<Select
								options={floorOptions}
								styles={customStyles}
								value={values.floor}
								onChange={value => setFieldValue('floor', value)}
								placeholder='Выбор этажа'
								required
							/>
							<Select
								options={roomOptions}
								styles={customStyles}
								value={values.room}
								onChange={value => setFieldValue('room', value)}
								placeholder='Выбор кабинета'
								required
							/>
							<div className={styles.booking__container}>
								<ReactDatePicker
									className={styles.booking__input}
									type='date'
									selected={values.date}
									onChange={value => setFieldValue('date', value)}
									dateFormat='dd.MM.yyyy'
									minDate={new Date()}
									maxDate={lastDayOfYear}
									placeholderText='ДД.ММ.ГГГГ'
									required
								/>
								<div className={styles['booking__icon-container']}>
									<div className={styles['booking__icon-container']}>
										<FaCalendarAlt className={styles.booking__icon} />
									</div>
								</div>
							</div>
							<Select
								value={values.time}
								options={timeOptions}
								onChange={value => setFieldValue('time', value)}
								styles={customStyles}
								placeholder='с 09:00 до 19:30'
								required
							/>
						</div>
						<textarea
							className={styles['booking__comment-input']}
							value={values.comment}
							onChange={value => setFieldValue('comment', value.target.value)}
							placeholder='Вы так же можете оставить комментарий к своей брони'
							maxLength={200}
						/>
						<div className={styles.buttons__wrapper}>
							<button className={styles.booking__button} type='submit'>
								Отправить
							</button>
							<button
								style={{ background: 'transparent', color: 'black' }}
								className={styles.booking__button}
								type='button'
								onClick={resetForm}
							>
								Очистить
							</button>
						</div>
					</Form>
				)}
			</Formik>
			<Modal active={modalActive} setActive={setModalActive} />
		</>
	)
}

export default MyForm
