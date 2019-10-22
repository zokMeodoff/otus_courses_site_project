import React, {Component} from 'react'
import ScheduleTable from "./ScheduleTable";

import AxiosService from "../../services/AxiosService"

class ScheduleComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            lessons: [],
            loaded: false,
            errors: [],
        }
    }

    handleSortChanged  = (event) => {
        const lessons = this.state.lessons;
        let lessonsToShow;
        if (event.target.value === 'courseName') {
            lessonsToShow = lessons.sort((a, b) => a.courseName > b.courseName ? 1 : -1)
        }
        else if (event.target.value === 'lesson') {
            lessonsToShow = lessons.sort((a, b) => a.name > b.name ? 1 : -1)
        }
        else if (event.target.value === 'date') {
            lessonsToShow = lessons.sort((a, b) => a.date > b.date ? 1 : -1)
        }
        this.setState({lessons: lessonsToShow})
    }

    async componentDidMount() {
        try {
            let response = await AxiosService.get('/api/lessons');
            if (response.status === 200) {
                response.sort((a, b) => a.courseName > b.courseName ? 1 : -1)
                this.setState({lessons: response, loaded: true});
            }
        } catch (errors) {
            this.setState({errors: errors.response.data['errors']})
            alert(errors.response.data['errors']);
        }
    }


    render = () => {
        if (this.state.loaded) {
            return (
                <div className="container">
                    <h2 className="h">Расписание занятий</h2>
                    <div>
                        <label>Сортировка &nbsp; &nbsp;</label>
                        <select onChange={this.handleSortChanged}>
                            <option value="courseName">Курс</option>
                            <option value="lesson">Название урока</option>
                            <option value="date">Дата</option>
                        </select>
                    </div>
                    <div className="row row_justify_space-between">
                        {
                            <table className='schedule__table'>
                                <tbody>
                                <tr>
                                    <th>Курс</th>
                                    <th>Название урока</th>
                                    <th>Дата</th>
                                </tr>
                                {
                                    this.state.lessons.map((lesson) =>
                                        <ScheduleTable
                                            lesson={lesson}
                                        />
                                    )}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row row_justify_space-between">
                        <h2>Загрузка расписания занятий...</h2>
                    </div>
                </div>
            )
        }
    }
}

export default ScheduleComponent;