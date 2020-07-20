import React, { useState } from 'react'
import CourseForm from './CourseForm'

export default function ManageCourses(props) {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    /*
    ...course indicates that a copy of the object is created.
    [event.target.name]. The bracket means evaluation and not destructuring.

    */
    function changeHandler({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        })
    };
    
    return (
        <div>
            <h2>Manage Courses</h2>
            {props.match.params.slug}
            <CourseForm course={course} onChangeHandler={changeHandler} />
        </div>
    )
}