import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/';
import { bindActionCreators } from 'redux';

class Task extends Component {
  render() {
    const {
      props: {
        task: {
          id: taskId,
          text: taskText,
        }
      }
    } = this;

    return (
      <tr>
        <td>
          {taskText}
        </td>
        <td>
          <button onClick={() => this.props.deleteTask(taskId)}>Delete Task</button>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ deleteTask }, dispatch),
)(Task);