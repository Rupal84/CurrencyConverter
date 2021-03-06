# Currency Converter

   This is a single page web application built in `reactjs`. This application offers nice UI built with `bootstrap` to perform conversion among different currencies based on conversion values maintained within application. 
   
   This application uses `formik` based form validations to enhance user experience. It incorporates basic validations at the moment but can be easily extended to perform more sophisticated field validations. 
   
   This application can perform direct, inverted and cross-over currency conversions where direct conversion is not possible. These types of conversions use `USD/EUR` as intermediate currencies. 
   
  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has nearly `100%` unit test coverage. 

## External Libraries used

- **bootstrap**: For styling web components 
- **jest**: Test runner for executing unit tests 
- **Testing library**: To interact with react component in unit tests.
- **Formik**: Form validations

## Setup instructions
1. Clone this repo at desired location on your machine. (or download as zip file and extract)
2. Run `npm install` in project root directory

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Exuecutes unit tests with jest runner and generate coverage report in different formats including html. 

### `npm run build`

Builds the app for production to the `build` folder.
