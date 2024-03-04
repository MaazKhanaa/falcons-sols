import styles from './button.module.css';

const PrimaryButton = (props) => {
  return (
    <button type={props.type} style={props.style} className={styles.primaryBtn}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
