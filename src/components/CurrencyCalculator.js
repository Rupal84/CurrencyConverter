import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Result from './Result'
import { convert } from '../utils/conversionTable'

const handleConversion = (values, actions) => {
  const { fromCurr, toCurr, amount } = values
  const { setStatus } = actions
  const fromCurrency = fromCurr.toUpperCase();
  const toCurrency = toCurr.toUpperCase();
  try {
    const result = convert(fromCurrency, toCurrency, amount);
    const precision = toCurrency === 'JPY' ? 0 : 2;
    setStatus({
      result: result.toFixed(precision),
      resultLabel: `${fromCurrency} to ${toCurrency}`
    });
  } catch (err) {
    setStatus({ error: `Unable to find rate for ${fromCurrency}/${toCurrency}` })
  }
}

function CurrencyCalculator() {
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
        onSubmit={handleConversion}
      >
        {({ errors, status, touched }) => {
          return (
            <Form>
              <div className="row">
                <div className="col-sm-5">
                  <div className="form-group">
                    <label htmlFor={'fromCurr'} className="form-label">From Currency</label>
                    <Field type='text' data-testid="fromCurr"
                      name='fromCurr'
                      className={'form-control' + (errors.fromCurr && touched.fromCurr ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name='fromCurr' component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <label htmlFor={'amount'} className="form-label">Amount</label>
                    <Field type='number' data-testid="amount"
                      name='amount'
                      className={'form-control' + (errors.amount && touched.amount ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name='amount' component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <label htmlFor={'toCurr'} className="form-label">To Currency</label>
                    <Field type='text' data-testid="toCurr"
                      name='toCurr'
                      className={'form-control' + (errors.toCurr && touched.toCurr ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name='toCurr' component="div" className="invalid-feedback" />
                  </div>
                  <div className="btn-group">
                    <span>
                      <button data-testid="submit" type="submit" className="btn btn-success">Convert</button></span>
                    <span><button type="reset" className="btn btn-secondary">Reset</button></span>
                  </div>
                </div>
                <div className="col-sm-6">
                  {status && <Result status={status} />}
                </div>
              </div>
            </Form>
          )
        }
      }
      </Formik></div>
  );
}

export default CurrencyCalculator;
