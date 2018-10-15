import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

// const today = () => {
//     let date = new Date();
//     return date.toDateString();
// }

// //const greeting = React.createElement('h1',{},'hello world');

// const greeting = <h1>Hello world! today is : {today()}</h1>

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
