import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/cardRedux';
import Card from '../Card/Card';

const Favorite = () => {
  const lists = useSelector(getFavorite);
    return (
      <div className={styles.hero}>
        <PageTitle>FAVORITE</PageTitle>
        <div className={styles.favoriteList}>
          <ul className={styles.favColumn}>
            {lists.map(list => <Card key={list.id} isFavorite={list.isFavorite}>{list.title}</Card>)}
          </ul>
        </div>
      </div>
    );
};

export default Favorite;