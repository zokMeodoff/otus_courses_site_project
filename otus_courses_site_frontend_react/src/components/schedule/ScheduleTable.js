import React, {Component} from "react";
import './Schedule.css';

class ScheduleTable extends Component {
    render = () => {
        const {lesson} = this.props;
        return (
            <tr className="schedule__table_row">
                <td className='schedule__table_row_cell'>{lesson.courseName}</td>
                <td className='schedule__table_row_cell'>{lesson.name}</td>
                <td className='schedule__table_row_cell'>{lesson.date}</td>
            </tr>
        )
    }
}

export default ScheduleTable;