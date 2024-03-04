import styles from './input.module.css';

const TextArea = (props) => {
  return (
    <>
      <label className={styles.label}>{props.label}</label>
      <textarea
        className={styles.textarea}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default TextArea;
