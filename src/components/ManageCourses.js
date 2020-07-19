import React from 'react'

export default function ManageCourses(props) {
    return (
        <div>
           <h2>Manage Courses</h2> 
           {props.match.params.slug}
        </div>
    )
}
