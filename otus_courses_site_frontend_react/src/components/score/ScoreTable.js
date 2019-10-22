import React, {Component} from "react";
import './Score.css';

class ScoreTable extends Component {
    render = () => {
        const {student} = this.props;
        return (
            <tr className="score__table_row">
                <td className='score__table_row_cell'>{student.firstName} &nbsp; {student.secondName}</td>
                <td className='score__table_row_cell'>{student.score}/5</td>
                <td className='score__table_row_cell'>{student.email}</td>
            </tr>
        )
    }
}

export default ScoreTable;