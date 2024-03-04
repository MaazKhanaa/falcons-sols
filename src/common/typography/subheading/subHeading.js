import styles from './subHeading.module.css';

const SubHeading = ({ text, isFirstSection }) => {
  const textColor = {
    color: isFirstSection ? '#0d1013' : '#03acd2',
  };
  return (
    <h2 style={textColor} className={styles.subHeading}>
      {text}
    </h2>
  );
};

export default SubHeading;
