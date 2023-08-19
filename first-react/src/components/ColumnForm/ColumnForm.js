import { useState } from "react";
import { useDispatch } from 'react-redux';
import Button from "../Button/Button";
import styles from './ColumnForm.module.scss';

const ColumnForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setTitle('');
        setIcon('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div>
                <label className={styles.columnLabel}>Title:</label><input className={styles.columnInput} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label className={styles.columnLabel}>Icon:</label><input className={styles.columnInput} type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
            </div>
            <Button>Add Column</Button>
        </form>
    );
};

export default ColumnForm;