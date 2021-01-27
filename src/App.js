import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Result from './Result'
import { convert } from './conversionTable'

function App() {
  const [resultLabel, setResultLabel] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const handleConversion = ({ fromCurr, toCurr, amount }) => {
    setError();
    const fromCurrency = fromCurr.toUpperCase();
    const toCurrency = toCurr.toUpperCase();
    setResultLabel(`${fromCurrency} to ${toCurrency}`)
    try {
      const result = convert(fromCurrency, toCurrency, amount);
      const precision = toCurrency === 'JPY' ? 0 : 2;
      setResult(result.toFixed(precision));
    } catch (err) {
      setError(`Unable to find rate for ${fromCurrency}/${toCurrency}`)
    }
  }
  return (
    <div className="container">
      <h1 className="header">Currency Converter</h1>
      <Formik
        initialValues={{
          fromCurr: '',
          amount: '',
          toCurr: ''
        }}
        validationSchema={Yup.object().shape({
          fromCurr: Yup.string()
            .required('From Currency is required'),
          amount: Yup.number()
            .required('Amount is required'),
          toCurr: Yup.string()
            .required('Email is required')
        })}
        onSubmit={fields => {
          handleConversion(fields);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group">
                  <label htmlFor={'fromCurr'} className="form-label">From Currency</label>
                  <Field type='text'
                    name='fromCurr'
                    className={'form-control' + (errors.fromCurr && touched.fromCurr ? ' is-invalid' : '')}
                  />
                  <ErrorMessage name='fromCurr' component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label htmlFor={'amount'} className="form-label">Amount</label>
                  <Field type='number'
                    name='amount'
                    className={'form-control' + (errors.amount && touched.amount ? ' is-invalid' : '')}
                  />
                  <ErrorMessage name='amount' component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label htmlFor={'toCurr'} className="form-label">To Currency</label>
                  <Field type='text'
                    name='toCurr'
                    className={'form-control' + (errors.toCurr && touched.toCurr ? ' is-invalid' : '')}
                  />
                  <ErrorMessage name='toCurr' component="div" className="invalid-feedback" />
                </div>
                <div className="btn-group">
                  <span>
                    <button type="submit" className="btn btn-success">Convert</button></span>
                  <span><button type="reset" className="btn btn-secondary">Reset</button></span>
                </div>
              </div>
              <div className="col-sm-6">
                <Result label={resultLabel} error={error} result={result} />
              </div>
            </div>
          </Form>
        )}
      </Formik></div>
  );
}

export default App;
