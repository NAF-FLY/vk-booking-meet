import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={`${styles.header}`}>
			<div className={styles.header__wrap}>
				<div className={styles.header__logo}>
					<img src='./src/assets/logo.png' alt='logo' />
				</div>
			</div>
		</header>
	)
}
export default Header
