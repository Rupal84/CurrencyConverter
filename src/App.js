import { useState } from 'react'
import InputText from './InputText'
import Result from './Result'
import {convert} from './conversionTable'

function App() {
  const [fromCurr, setFromCurr] = useState('');
  const [toCurr, setToCurr] = useState('');
  const [resultLabel, setResultLabel] = useState();
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const handleCurrencyChange = (currType, e) => {
    const value = e.target.value;
    if(currType === 'FROM') {
      setFromCurr(value.toUpperCase());
    } else {
      setToCurr(value.toUpperCase());
    }
  }
  const handleConversion = () => {
    setError();
    setResultLabel(`${fromCurr} to ${toCurr}`)
    try {
      const result = convert(fromCurr, toCurr, amount);
      const precision = toCurr === 'JPY' ? 0 : 2;
      setResult(result.toFixed(precision));
    } catch (err) {
      setError(`Unable to find rate for ${fromCurr}/${toCurr}`)
    }
  }
  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="row">
        <div className="col-sm-4">
          <form className="form-floating">           
            <InputText type='text' label='From Currency' name='from' id='from' onChange={handleCurrencyChange.bind(this, 'FROM')}/>
            <InputText type='number' label='Amount' name='amount' id='amount' onChange={(e)=>setAmount(+e.target.value)}/>
            <InputText type='text' label='To Currency' name='to' id='to' onChange={handleCurrencyChange.bind(this, 'TO')}/>
            <button type="button" className="btn btn-success" onClick={handleConversion}>Convert</button>
          </form>
        </div>
        <div className="col-sm-4">
           <Result label={resultLabel} error={error} result={result}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
