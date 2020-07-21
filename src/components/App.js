import React from 'react'
import Header from './common/Header'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import { Route, Switch , Redirect} from "react-router-dom";
import PageNotFound from './common/PageNotFound';
import ManageCourses from './ManageCourses';
import { ToastContainer } from "react-toastify";
import  "react-toastify/dist/ReactToastify.css"; 
export default function App() {
    /*
    Route component takes two arguments . 
    Argument 1:- The path .
    Argument 2:- The component which needs to be assigned the path
    */

    //since hideProgressBar is a boolean in ToastContainer , we dont have to mention its value while passing as props
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
            <Header></Header>
            <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/courses" component={CoursesPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Redirect from="/about-page" to="about"></Redirect>
            <Route path="/course:slug" component={ManageCourses}></Route>
            <Route path="/course" component={ManageCourses}></Route>
            <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    )
}
