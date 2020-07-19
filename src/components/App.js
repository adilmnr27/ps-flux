import React from 'react'
import Header from './common/Header'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';

export default function App() {
    const path= window.location.pathname;

    function getPath(){
        if(path==="/")return<HomePage/>;
        if(path==="/about")return<AboutPage/>;
        if(path==="/courses")return<CoursesPage/>;
    }
      
    
    return (
        <div className="container-fluid">
            <Header></Header>
            {getPath()}
        </div>
    )
}
