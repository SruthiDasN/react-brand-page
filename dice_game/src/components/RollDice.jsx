
import styled from "styled-components";

const RollDice = ({rollDice ,currentDice }) => {

  
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice_1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`

  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;