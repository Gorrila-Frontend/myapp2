import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Task from '../task/';


class TaskList extends Component {
    render () {
            return (
                <div className={ this.props.className }>
                <table>
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.tasks.map((task, index) => {
                        <Task key={index} task={task} />
                    }) }
                    </tbody>
                </table>
                </div>
            );
        } 
    }
function mapStateProps ( state ) {
    return { 
        task:state.tasks
     };
}
export default connect(mapStateProps)(styled(TaskList)`
    background: #555; 
`);
