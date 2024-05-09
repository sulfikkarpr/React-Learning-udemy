import { useState } from "react";
import Header from "./components /Header";
import ResultTable from "./components /ResultTable";
import TableHead from "./components /TableHead";
import Userinput from "./components /Userinput";
import { calculateInvestmentResults } from "./util/investment";


const TABLE_HEAD_ROW = [
  'Year', 'Investment Value', 'Interest(Year)', 'Total Interest', 'Invested Capital'
]

function App() {

  const [inputStates, setInputState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })


  const handleChange = (name, e) => {
    setInputState((prevState) => ({ ...prevState, [name]: +e }));


  }

  const inputIsValid = inputStates.duration >= 1;

  return (
    <>
      <Header />
      <div id="user-input" >
        <div className='input-group'>
          <Userinput name='initialInvestment' handleChange={handleChange} value={inputStates.initialInvestment} >INITIAL INVESTMENT</Userinput>
          <Userinput name='annualInvestment' handleChange={handleChange} value={inputStates.annualInvestment} >ANUAL INVESTMENT</Userinput>
        </div>

        <div className='input-group'>
          <Userinput name='expectedReturn' handleChange={handleChange} value={inputStates.expectedReturn}>EXPECTED RETURN</Userinput>
          <Userinput name='duration' handleChange={handleChange} value={inputStates.duration} >DURATION</Userinput>
        </div>

      </div>
      <table id="result">
        <TableHead headRow={TABLE_HEAD_ROW} />
        {inputIsValid && <ResultTable input={inputStates} />}
      </table>
      {!inputIsValid && <p className="center"> Please enter a duration grater than 0 </p>}

    </>
  )
}

export default App
