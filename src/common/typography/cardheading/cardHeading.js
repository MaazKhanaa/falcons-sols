import styles from './cardHeading.module.css';

const CardHeading = ({ text }) => {
  return <h1 className={styles.heading}>{text}</h1>;
};

export default CardHeading;
