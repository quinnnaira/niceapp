import styles from './InfoCard.module.css';

function InfoCard(props) {
  return (
    <div className={styles.infoCard} style={{ backgroundColor: props.colorCode }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default InfoCard;
