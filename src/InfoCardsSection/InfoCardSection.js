import styles from './InfoCardSection.module.css';
import InfoCard from './InfoCard';

function InfoCardSection() {
  const cardItems = [
    {
      title: 'Surf Camp',
      content:
        'We specialise in teaching complete newbies who have never surfed before or if you want to progress your... ',
      colorCode: '#3989B2',
    },
    {
      title: 'Lessons',
      content:
        'Our surf instructors and surf guides are professional and highly motivated. They are determined to get you the best waves and ensure you... ',
      colorCode: '#4EADB4',
    },
    {
      title: 'About Us',
      content:
        'We believe we are one of the best surf camps in Bali because we are in are the best Surf Camp in Bali because we are in the best location and nearby... ',
      colorCode: '#DCD43E',
    },
  ];

  
  const infoCards = cardItems.map((props) => {
    return (
      <InfoCard
        title={props.title}
        content={props.content}
        colorCode={props.colorCode}
      />
    );
  });

  return (
    <div className={styles.infoCardSection}>
      {infoCards}
    </div>
  );
}

export default InfoCardSection;
