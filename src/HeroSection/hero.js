import styles from './Hero.module.css';

function HeroSection() {
  
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
      <h1>SURF CAMP <br/>& LESSONS</h1>
      <h3>THE SURF AND ATMOSPHERE</h3>
      </div>
    </div>
  );
}

export default HeroSection;
