import styles from './input.module.css';

const Input = (props) => {
  return (
    <>
      <label className={styles.label}>{props.label}</label>
      <input
        className={styles.input}
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.name}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
