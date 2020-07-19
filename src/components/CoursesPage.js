import React, { useState } from 'react';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';

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
            <CourseList courses={courses}></CourseList>
        </>
    )
}

export default CoursesPage;
