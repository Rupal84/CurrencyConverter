import { useState } from 'react'
import Currency from './Currency'
import InputText from './InputText'
import Result from './Result'

function App() {
  const [fromCurr, setFromCurr] = useState('AUD');
  const [toCurr, setToCurr] = useState('AUD');
  const [amount, setAmount] = useState('');
  const handleCurrencyChange = (currType, e) => {
    if(currType === 'FROM') {
      setFromCurr(e.target.value);
    } else {
      setToCurr(e.target.value);
    }
  }
  const handleConversion = () => {
    console.log(amount, fromCurr, toCurr);
  }
  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="row">
        <div className="col-sm-4">
          <form className="form-floating">     
            <Currency id={'from'} name={'from'} label={'From Currency'} handleChange={handleCurrencyChange.bind(this, 'FROM')}/>
            <InputText label='Amount' name='amount' id='amount' onChange={setAmount}/>
            <Currency id='to' name='to' label='To Currency' handleChange={handleCurrencyChange.bind(this, 'TO')}/>
            <button type="button" className="btn btn-success" onClick={handleConversion}>Convert</button>
          </form>
        </div>
        <div className="col-sm-4">
           <Result label={`${fromCurr} to ${toCurr}`} result={'abc'}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
