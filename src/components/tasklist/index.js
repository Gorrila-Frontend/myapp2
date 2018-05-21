import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Task from '../task/';


class TaskList extends Component {
  render() {
    console.log(this.props.tasks);
    return (
      <div className={this.props.className}>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.tasks.map((task, index) => {
                return <Task key={index} task={task} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks,
  })
)(styled(TaskList) `
    background: #555; 
`);
