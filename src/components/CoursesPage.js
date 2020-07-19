import React, { Component } from 'react';
import { getCourses } from '../api/courseApi';

export class CoursesPage extends Component {
    state = {
        courses: []
    }

    //component must be mounted before setting state
    componentDidMount() {
        getCourses().then(data => {
            console.log("getting courses")
            console.log(data);
            this.setState({
                courses: data
            })
            /*
            this.state.courses=data;// do not mutate state directly by doing this
            */
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <>
                <div>
                    <h2> Courses</h2>
                </div>
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
                            this.state.courses.map(course => {
                                return (<tr key={course.id}>
                                    <td>{course.title}</td>
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
}

export default CoursesPage
