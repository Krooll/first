import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
    return (
        <div className={styles.hero}>
        <PageTitle>FAVORITE</PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
};

export default Favorite;