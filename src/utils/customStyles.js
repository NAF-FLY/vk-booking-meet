// стили для react-select
const customStyles = {
	control: (provided, state) => ({
		...provided,
		height: '30px',
		fontSize: '14px',
		minWidth: '146px',
		maxWidth: '350px',
		borderRadius: '4px',
		borderColor: state.hasValue ? '#1f08a5' : '#a9a2a2',
		transition: 'box-shadow .3s ease-in-out',
		caretColor: 'transparent',
	}),
	menuList: provided => ({
		...provided,
		padding: '10px',
		maxHeight: '150px',
		overflowY: 'auto',
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? '#fff' : '#444',
		backgroundColor: state.isSelected ? '#0074d9' : '#fff',
		'&:hover': {
			backgroundColor: state.isSelected ? '#0074d9' : '#f1f1f1',
			cursor: 'pointer',
		},
		cursor: 'pointer',
	}),
	dropdownIndicator: provided => ({
		...provided,
		color: '#a9a2a2',
		fontSize: '14px',
		'&:hover': {
			color: '#000',
			cursor: 'pointer',
		},
	}),
	singleValue: (provided, state) => ({
		...provided,
		color: state.hasValue !== '' ? '#000' : '#a9a2a2',
	}),
}

export default customStyles
