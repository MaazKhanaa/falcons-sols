import styles from './mainHeading.module.css';

const MainHeading = ({ text }) => {
  return (
    <h1
      className={styles.mainHeading}
      // dangerouslySetInnerHTML={{ __html: text }}
    >
      {text}
    </h1>
  );
};

export default MainHeading;
