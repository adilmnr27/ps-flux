import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes'

//creating an action
//The below function is know as the action creator. 
export function saveCourse(course){
    return courseApi.saveCourse(course).then(savedCourse=>{
        //let dispatcher know that action has been triggered 
        dispatcher.dispatch({
            actionType:course.id ? actionTypes.UPDATE_COURSE : actionTypes.ADD_COURSE,
            course:course
        })
    })
}

export function loadCourses(course){
    return courseApi.getCourses().then(_courses=>{
        //let dispatcher know that action has been triggered 
        dispatcher.dispatch({
            actionType:actionTypes.LOAD_COURSES,
            courses:_courses
        })
    })
}