import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite, removeCard } from '../../redux/cardRedux';

const Card = props => {
    const dispatch = useDispatch(addFavorite);
    const clickHandler = () => {
        dispatch(addFavorite(props.id, props.title));
    };

    const removeHandler = () => {
        dispatch(removeCard(props.id));
    };
    
    return (
        <div>
            <li className={styles.card}>{props.children}
                <div>
                    <button onClick={clickHandler} className={clsx(
                        styles.cardButton, props.isFavorite && styles.cardButtonActive)}>
                        <span className='fa fa-star-o'></span>
                    </button>
                    <button onClick={removeHandler} className={styles.removeButton}><span className='fa fa-trash'></span></button>
                </div>
            </li>
        </div>
    );
};

export default Card;