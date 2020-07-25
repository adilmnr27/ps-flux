import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import * as courseAction from '../actions/courseAction';
import courseStore from '../stores/courseStore'
import store from '../stores/courseStore';

function CoursesPage() {
    const [courses, setCourses] = useState(courseStore.getCourses());

    
    useEffect(() => {
        //add change listener accepts a function which will be called when store changes
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            ;
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

    function deleteCourse(id){
        courseAction.deleteCourse(id);
    }

    return (
        <>
            <div>
                <h2> Courses</h2>
            </div>
            <Link to="/course" className="btn btn-primary">Add Course</Link>
            <CourseList courses={courses} deleteCourse={deleteCourse}></CourseList>
        </>
    )
}

export default CoursesPage;
