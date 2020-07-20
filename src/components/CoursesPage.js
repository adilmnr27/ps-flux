import React, { useState } from 'react';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

 function CoursesPage() {
    const [ courses, setCourses ] = useState([]);

    React.useEffect(() => {
        getCourses().then(data => {
            console.log("getting courses")
            console.log(data);
            setCourses(data)})
    },[]);

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
