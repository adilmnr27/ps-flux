import React, { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
import { toast } from 'react-toastify'
import courseStore from '../stores/courseStore';
import * as courseActions from "../actions/courseAction";

export default function ManageCourses(props) {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    const [courses, setCourses] = useState(courseStore.getCourses());

    /* when the slug changes , rerun it.
    Because if any dependecy in the below array changes, useEffect reruns
    */
    useEffect(() => {
        //if we refresh the manager course page, it was giving error as it was not laoding the course. Hence added the below lines to load course if empty
        courseStore.addChangeListener(onChange); //to get notified if there is any change to course store
        if (courses.length === 0) {
            courseActions.loadCourses();
            //when this call is complete , onChange event will be called as there is change in store data
        }
        
        else if (props.match.params.slug) {
            setCourse(courseStore.getCourseBySlug(props.match.params.slug))
        }
        return () => courseStore.removeChangeListener(onChange);
    }, [courses.length, props.match.params.slug])


    function onChange() {
        setCourses(courseStore.getCourses());
    }


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

    function handleSubmit(event) {
        event.preventDefault(); //prevents the event from posting back to server
        courseActions.saveCourse(course).then(data => {
            props.history.push("/courses");
            toast.success("Course Saved")
        })
    }

    return (
        <div>
            <h2>Manage Courses</h2>
            {props.match.params.slug}
            <CourseForm course={course} onChangeHandler={changeHandler} onSubmit={handleSubmit} />
        </div>
    )
}
