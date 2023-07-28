import { useState } from "react";
import Button from "../Button/Button";
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
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