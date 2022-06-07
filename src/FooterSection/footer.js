import styles from './Footer.module.css';
const name ='ben';
const age = 10;

function button(name, age) {
  console.log(`my name is ${name} , i am ${age} years old`);
  return (
    <>
      <button onClick={buttonClick()}>click me</button>
      <button onClick={buttonClick}>click me</button>
      <button onClick={() => {
          buttonClick('lanre', 22);}}>
      click me
      </button>
    </>
  )
};
export default buttonClick;
