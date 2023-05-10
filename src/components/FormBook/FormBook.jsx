import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { useCallback, useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import { FaCalendarAlt } from 'react-icons/fa'

import customStyles from '../../utils/customStyles'
import {
	floorOptions,
	lastDayOfYear,
	roomOptions,
	timeOptions,
	towerOptions,
} from '../../utils/constants'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './Form.module.css'

const FormBook = () => {
	const [bookingData, setBookingData] = useState({
		tower: '',
		floor: '',
		room: '',
		date: '',
		time: '',
		comment: '',
	})

	// устанавливаем значение из выпадающего меню
	const handleSelectChange = useCallback((selectedOption, actionMeta) => {
		console.log(actionMeta.name, selectedOption.label)
		// const { name, value } = actionMeta
		setBookingData(prevBookingData => ({
			...prevBookingData,
			[actionMeta.name]: selectedOption.label,
		}))
	}, [])

	// функция для выбора даты
	const handleDateChange = useCallback(date => {
		setBookingData(prevBookingData => ({
			...prevBookingData,
			date,
		}))
	}, [])

	//открыть календарь по клику на иконку календаря
	const datePickerRef = useRef(null)
	const handleDateIconClick = useCallback(() => {
		datePickerRef.current.setFocus()
	}, [])

	// функция для ввода текста в поле комментария
	const handleCommentChange = useCallback(event => {
		const { value } = event.target
		setBookingData(prevBookingData => ({
			...prevBookingData,
			comment: value,
		}))
	}, [])

	// отправка данных формы
	const handleSubmit = useCallback(
		event => {
			event.preventDefault()
			console.log('Booking data:', bookingData)
			// setShowPopup(true)
			handleClear()
		},
		[bookingData]
	)

	// очищение всех полей формы
	const handleClear = useCallback(() => {
		setBookingData({
			tower: '',
			floor: '',
			room: '',
			date: '',
			time: '',
			comment: '',
		})
	}, [])

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.inputs__wrapper}>
				<Select
					id='tower'
					name='tower'
					value={bookingData.tower}
					options={towerOptions}
					onChange={handleSelectChange}
					styles={customStyles}
					placeholder='Башня А или Б'
					required
				/>
				<Select
					id='floor'
					name='floor'
					value={bookingData.floor}
					options={floorOptions}
					onChange={handleSelectChange}
					styles={customStyles}
					placeholder='Выбор этажа'
					required
				/>
				<Select
					id='room'
					name='room'
					value={bookingData.room}
					options={roomOptions}
					onChange={handleSelectChange}
					styles={customStyles}
					placeholder='Выбор переговорной'
					required
				/>

				<div className={styles.booking__container}>
					<DatePicker
						className={styles.booking__input}
						selected={bookingData.date}
						onChange={handleDateChange}
						dateFormat='dd.MM.yyyy'
						minDate={new Date()}
						maxDate={lastDayOfYear}
						showPopperArrow={false}
						ref={datePickerRef}
						placeholderText='ДД.ММ.ГГГГ'
						required
					/>
					<div className={styles['booking__icon-container']}>
						<FaCalendarAlt
							className={styles.booking__icon}
							onClick={handleDateIconClick}
						/>
					</div>
				</div>
				<Select
					id='time'
					name='time'
					value={bookingData.time}
					options={timeOptions}
					onChange={handleSelectChange}
					styles={customStyles}
					placeholder='с 09:00 до 19:30'
					required
				/>
			</div>
			<textarea
				className={styles['booking__comment-input']}
				id='comment'
				name='comment'
				value={bookingData.comment}
				onChange={handleCommentChange}
				placeholder='Вы так же можете оставить комментарий к своей брони'
				maxLength={200}
			/>
			<div className={styles.buttons__wrapper}>
				<button className={styles.booking__button} type='submit'>
					Отправить
				</button>
				<button
					className={styles.booking__button}
					type='button'
					onClick={handleClear}
				>
					Очистить
				</button>
			</div>
		</form>
	)
}

export default FormBook
