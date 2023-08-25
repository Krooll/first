import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch(addFavorite);
    const clickHandler = () => {
        dispatch(addFavorite(props.id, props.title));
    };
    
    return (
        <div>
            <li className={styles.card}>{props.children}
                <button onClick={clickHandler} className={clsx(
                    styles.cardButton, props.isFavorite && styles.cardButtonActive)}>
                    <span className='fa fa-star-o'></span>
                </button>
            </li>
        </div>
    );
};

export default Card;