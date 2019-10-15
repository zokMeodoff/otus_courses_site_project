import React, {Component} from "react";
import ScoreTable from "./ScoreTable";

import AxiosService from "../../services/AxiosService"

class ScoreComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            studentsToShow: [],
            searchString: '',
            loaded: false,
            errors: [],
        };

    }

    handleSearchStringChanged = (event) => {
        this.setState({searchString: event.target.value})
        const searchString = event.target.value
        const result = this.state.students.filter(student => {
            const fullName = student.firstName.toLowerCase() + ' ' + student.secondName.toLowerCase();
            return fullName.includes(searchString.toLowerCase())})
        this.setState({studentsToShow: result})
    }

    async componentDidMount() {
        try {
            let response = await AxiosService.get('/api/students');
            if (response.status === 200) {
                this.setState({students: response, studentsToShow: response, loaded: true});
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
				    <h2 className="h">Успеваемость студентов</h2>
                    <div className="score_searchbar">
                        <input
                            value={this.state.searchString}
                            type="text"
                            className="form__input"
                            placeholder="Поиск по имени"
                            onChange={this.handleSearchStringChanged}
                        />
                    </div>
				    <div className="row row_justify_space-between">
                        <table className='score__table'>
                            <tbody>
                            <tr>
                                <th>ФИО</th>
                                <th>Успеваемость</th>
                                <th>Email</th>
                            </tr>
                            {
                                this.state.studentsToShow.map((student) =>
                                    <ScoreTable
                                        student={student}
                                        key={student.firstName + ' ' + student.secondName}
                                    />
                                )}
                            </tbody>
                        </table>
				</div>
			</div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row row_justify_space-between">
                        <h2>Загрузка информации об успеваемости студентов...</h2>
                    </div>
                </div>
            )
        }
    }
}

export default ScoreComponent;