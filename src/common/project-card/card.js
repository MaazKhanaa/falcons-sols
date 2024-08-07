import styles from './card.module.css';

const Card = ({ children }) => {
  return (
    <>
      <div className={styles.cardOuter}>
        <div className={styles.mainCard}>{children}</div>
      </div>
    </>
  );
};
export default Card;
