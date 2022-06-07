import styles from './taskSection.module.css';

function TaskSection(props) {
  
    return (
      <div className={styles.taskSection } style={{ backgroundColor: props.colorCode }}>
        <h3>
            HERE WE ARE
            </h3>
        <h1>
           SURFING IS FUN <br /> LET THE FUN BEGIN...
        </h1>
        <button>
          
         JOIN US
        </button>
      </div>

    );

  }
  
  export default TaskSection;