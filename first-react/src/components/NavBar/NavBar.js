import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navBar}>
                    <button className={styles.navButton}><Link className={styles.linkButton} to="/"><span className="fa fa-tasks"></span></Link></button>
                    <div>
                        <ul className={styles.navList}>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;