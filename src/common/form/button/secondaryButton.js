import styles from './button.module.css';

const SecondaryButton = (props) => {
  return <button className={styles.secondaryBtn}>{props.text}</button>;
};

export default SecondaryButton;
