import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import * as courseAction from '../actions/courseAction';
import courseStore from '../stores/courseStore'

function CoursesPage() {
    const [courses, setCourses] = useState(courseStore.getCourses());

    
    useEffect(() => {
        //add change listener accepts a function which will be called when store changes
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            debugger;
            //meaning it has not been initialized
            courseAction.loadCourses();
        }
        return () => courseStore.removeChangeListener(onChange); //clean up on unmount

               
    }, []);
    

    /*
    useEffect(() => {
        if(courseStore.getCourses().length===0){
            courseAction.loadCourses().then(_courses=>{
                setCourses(courseStore.getCourses(_courses));
            })
        }
    
    }, [courseStore.getCourses().length])
    */
    

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return (
        <>
            <div>
                <h2> Courses</h2>
            </div>
            <Link to="/course" className="btn btn-primary">Add Course</Link>
            <CourseList courses={courses}></CourseList>
        </>
    )
}

export default CoursesPage;
