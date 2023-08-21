import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <div className={styles.hero}>
        <PageTitle>ABOUT</PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
};

export default About;