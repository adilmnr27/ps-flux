/* App Entry POint*/
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from 'react-dom'; //named import refenernces a function named render and assigns it to a const render
import App from "./components/App";
import { BrowserRouter as Router } from 'react-router-dom';

//render function will render our app.
//render function takes 2 arguments 
//Argument 1:- The component which needs to be rendered. 
//Argument 2:- The dom element at which iit should render
//in public folder , in index.html we have a div whose id is 'root'. We will render the components to this div
render(<Router><App /></Router>, document.getElementById('root'));

//The <Router> now enables us to us routes in any of the app components.
