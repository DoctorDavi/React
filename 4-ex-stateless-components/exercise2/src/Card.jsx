import monkeyImage from "./assets/monkey.jpg";

function Card() {
  /*
  Card: 
    <img />
    <h2>
    <p>
  */

  return (
    <>
      <img src={monkeyImage} />
      <h2>Nader</h2>
      <p>Nader really likes monkeys... 🐵</p>
    </>
  );
}

export default Card;
