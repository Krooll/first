import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navBar}>
                    <button className={styles.navButton}><a className={styles.linkButton}href="/"><span className="fa fa-tasks"></span></a></button>
                    <div className={styles.navList}>
                        <a className={styles.link} href='/'>Home</a>
                        <a className={styles.link} href='/favorite'>Favorite</a>
                        <a className={styles.link} href='/about'>About</a>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;