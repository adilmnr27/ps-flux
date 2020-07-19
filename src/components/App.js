import React from 'react'
import Header from './common/Header'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import { Route, Switch , Redirect} from "react-router-dom";
import PageNotFound from './common/PageNotFound';
import ManageCourses from './ManageCourses';
export default function App() {
    /*
    Route component takes two arguments . 
    Argument 1:- The path .
    Argument 2:- The component which needs to be assigned the path
    */

    return (
        <div className="container-fluid">
            <Header></Header>
            <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/courses" component={CoursesPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Redirect from="/about-page" to="about"></Redirect>
            <Route path="/course:slug" component={ManageCourses}></Route>
            <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    )
}
