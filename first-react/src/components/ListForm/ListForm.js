import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';
import { addList } from '../../redux/store';
import { useState } from 'react';
import Button from '../Button/Button';

const ListForm = () => {
    const dispatch = useDispatch(addList);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <div>
                <label className={styles.listLabel}>Title:</label><input className={styles.listInput} type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                <label className={styles.listLabel}>Description:</label><input className={styles.listInput} type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
                <Button>Add List</Button>
            </div>
        </form>
    );
};

export default ListForm;