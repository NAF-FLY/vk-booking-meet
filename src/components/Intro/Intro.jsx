import MyForm from '../MyForm/MyForm'
import styles from './Intro.module.css'

const Intro = ({ setActive }) => {
	return (
		<div className={styles.intro}>
			<div className={styles.intro__wrap}>
				<img
					className={styles.intro__img}
					src='../assets/main.webp'
					alt='intro'
				></img>
				<div className='layout'>
					<div className={styles.intro__inner}>
						<h1 className={styles.intro__title}>
							Забронируйте переговорные комнаты, конференц-залы и&nbsp; кабинеты
						</h1>
						<div className={styles.form__wrapper}>
							<MyForm setActive={setActive} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Intro
