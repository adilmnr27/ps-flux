/*
Three basic things related to store
1) It extends EventEmitter so that we have access to EventEmitters capapbilites
2) addListener/removeListener on react components
3) emit to react elements that data has been updated
*/

// Please refer https://nodejs.org/api/events.html#events_class_eventemitter
import { EventEmitter } from "events";
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = "change";
let _courses = []; //private field to avoid mutability from other files
//Flux wraps the functions from eventemitter 
class CourseStore extends EventEmitter {
    addChangeListener(callback) {
        // add the listener(callback) to listnerArray for event CHANGE_EVENT
        this.on(CHANGE_EVENT, callback) 
    }

    removeChangeListener(callback) {
        // remove the listener(callback) to listnerArray for event CHANGE_EVENT
        this.removeListener(CHANGE_EVENT, callback) 
    }

    emitChange() {
        //notify all the listers which have been added in listener array for event CHANGE_EVENT
        this.emit(CHANGE_EVENT)
    }

    //as _courses is private
    getCourses() {
        return _courses;
    }

    //handy function to return a part of data from flux store
    getCourseBySlug(slug) {
        debugger;
       return _courses.find(course => {
            return course.slug === slug
        })
    }
}

const store = new CourseStore();
//now register the store with dispatcher
dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.ADD_COURSE:
            debugger;
            _courses.push(action.course);

            //Anytime that the store changes, we need to call emitChange();
            //We just change the course by pushing a new course
            //By emitting the change , any react components which have registerd to the store will be notified
            store.emitChange();
            break;
        case actionTypes.UPDATE_COURSE:
            debugger;
            _courses = _courses.map(course => course.id == action.course.id ? action.course : course);
            store.emitChange();
            break;
        case actionTypes.LOAD_COURSES:
            debugger;
            _courses= action.courses;
            store.emitChange();
            break;
        default:

    }
})
export default store;