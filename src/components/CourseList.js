import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function CourseList(props) {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.courses.map(course => {
                            return (<tr key={course.id}>
                                <td><Link to={"/course" + course.slug}>{course.title}</Link></td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

//Setting an attribute 'proptypes' on the function as every thing is an object in javascript
//It will not be evaluated in production mode
//If not complied it gives a warning, error might be thrown if there are cascading effects
CourseList.propTypes={
    courses:PropTypes.array.isRequired,
}
