import React from 'react';
import './App.css';
import NumberButton from '../src/components/ButtonComponents/NumberButton'
import ActionButton from '../src/components/ButtonComponents/ActionButton'
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="calculator">

      <div className='top-look'>
        <CalculatorDisplay />
       </div>
       <div className="all-buttons">
        <div className="not-operators">
          <div className="action-button">   
            {/* <ActionButton text={4} buttonStyle={'actionLook zero'}/> */} 
            <ActionButton text={'Clear'} buttonStyle={'actionLook clear'}/>
          </div>

          <div className="number-button">
            <NumberButton text={7} buttonStyle={'button-look'}/>
            <NumberButton text={8} buttonStyle={'button-look'}/>
            <NumberButton text={9} buttonStyle={'button-look'}/>
            <NumberButton text={4} buttonStyle={'button-look'}/>
            <NumberButton text={5} buttonStyle={'button-look'}/>
            <NumberButton text={6} buttonStyle={'button-look'}/>
            <NumberButton text={1} buttonStyle={'button-look'}/>
            <NumberButton text={2} buttonStyle={'button-look'}/>
            <NumberButton text={3} buttonStyle={'button-look'}/>
            <NumberButton text={0} buttonStyle={'button-look zero'}/>
          </div>
        </div>
        <div>
        <NumberButton text={'÷'} buttonStyle={'button-look operator'}/>
        <NumberButton text={'X'} buttonStyle={'button-look operator X'}/>
        <NumberButton text={'-'} buttonStyle={'button-look operator minus'}/>
        <NumberButton text={'+'} buttonStyle={'button-look operator'}/>
        <NumberButton text={'='} buttonStyle={'button-look operator'}/>
        </div>
      </div>
     
    </div>
  );
};

ActionButton;
NumberButton;



export default App;
