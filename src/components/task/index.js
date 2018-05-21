import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/';
import { bindActionCreators } from 'redux';

class Task extends Component {
    render () {
        return (
            <tr>   
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={() =>  this.props.deleteTask(this.props.id)  }>Delete Task</button>
                </td>
            </tr>
        );
    }
}

function mapDispatchProps(dispatch) {
    return bindActionCreators({ deleteTask }, dispatch);
}

export default connect( mapDispatchProps  )(Task);