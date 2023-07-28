import CardForm from '../CardForm/CardForm';
import styles from './Card.module.scss';

const Card = props => {
    return (
        <div>
            <li className={styles.card}>{props.children}</li>
        </div>
    );
};

export default Card;