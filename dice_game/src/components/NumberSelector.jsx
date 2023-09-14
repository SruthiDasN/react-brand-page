
import styled from 'styled-components';

const NumberSelector = ({ error, setError, selectNumber, setSelectNumber }) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    const numberSelectorHandler = (value) => {
      setSelectNumber(value)
      setError("");
    }
  return (
    <NumberSelectorContainer>
      <p className='error'>{ error }</p>
      <div className='flex'>
        {arrNumber.map((value, i) => (
            <Box key={i}
            isSelected = {value === selectNumber}
            onClick={() => { numberSelectorHandler(value) } }
            >{value}</Box>
        ))}
       </div> 
       <p>Select Number</p>
       
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .error {
    color: red;
  }

  .flex {
    display: flex;
    gap: 24px;
    
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }

`;

const Box = styled.div`

    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-content: center;
    font-size: 24px;
    font-weight: 500;
    background-color: ${(props) => props.isSelected ? 'black' : 'white'};
    color: ${(props) => props.isSelected ? 'white' : 'black' };
`;