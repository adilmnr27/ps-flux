import React, { useState , useEffect} from 'react'
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

    /* when the slug changes , rerun it.
    Because if any dependecy in the below array changes, useEffect reruns
    */
    useEffect(() => {
        if(props.match.params.slug){
            debugger;
            setCourse(courseStore.getCourseBySlug(props.match.params.slug))
        }
    }, [props.match.params.slug])



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

    function handleSubmit(event){
        event.preventDefault(); //prevents the event from posting back to server
        courseActions.saveCourse(course).then(data=>{
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
