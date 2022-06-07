import styles from './SummerSurf.module.css';

function SummerSurfCamp() {
  return (
    <div className={styles.summersurf}>
      <div className={styles.summersurfHeading}>
      <div className={styles.summersurfImg}>
        <img src="../images/manswimming.jpeg" alt="" />
      </div>
        <h1>Summer Surf Camp</h1>
      </div>
    </div>
  );
}

export default SummerSurfCamp;
