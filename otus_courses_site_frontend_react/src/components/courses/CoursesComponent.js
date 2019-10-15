import React, { Component } from 'react';
import CourseCard from './CourseCard';

import AxiosService from "../../services/AxiosService"

class CoursesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            loaded: false,
            errors: []
        }
    }

    async componentDidMount() {
        try {
            let response = await AxiosService.get('/api/courses');
            if (response.status === 200) {
                this.setState({courses: response, loaded: true})
            }
        } catch (errors) {
        	this.setState({errors: errors.response.data['errors']})
            alert(errors.response.data['errors']);
        }
    }

    render() {
        if (this.state.loaded) {
            return (
            	<div className="container">
				    <h2 className="h">Популярные курсы</h2>
				    <div className="row row_justify_space-between">
                        {
                            this.state.courses.map((course) =>
                                <CourseCard
                                    course={course}
                                    key={course.name}
                                />
                            )
                        }
				</div>
			</div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row row_justify_space-between">
                        <h2>Загрузка списка курсов...</h2>
                    </div>
                </div>
            )
        }
    }
}

export default CoursesComponent;