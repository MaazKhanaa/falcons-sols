import { GiCheckMark } from 'react-icons/gi';
import styles from './about.module.css';

const AboutPoint = ({ abouttext }) => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <div className="col-auto pe-3">
          <span className={styles.aboutIcon}>
            <GiCheckMark />
          </span>
        </div>
        <div className="col">
          <h4 className={`${styles.aboutPointText} mb-0`}>{abouttext}</h4>
        </div>
      </div>
    </>
  );
};

export default AboutPoint;
