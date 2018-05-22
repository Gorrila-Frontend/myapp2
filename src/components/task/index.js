import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTodo, addTask } from '../../actions/';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

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
      <div
        className={this.props.className}>

        <div
          style={{
            maxWidth: "100%",
          }}
          >
          {taskText}
      </div>
      <div>
          <a
            href="#"
            style={{
              marginLeft:"30px"
            }}
            onClick={() => console.log(!this.props.task.isEnded)}

            className="badge badge-success">
            Выполненно
          </a>
          <a
            href="#"
            style={{
              marginBottom: "30px",
              marginRight: "10px",
              marginLeft: "5px",
            }}
            className="badge badge-danger"
            onClick={() => (loca(!this.props.task.isDeleted),this.props.deleteTask(taskId))}>
            Удалить задачу
          </a>

          <span style={{ width: "100%",textAlign: "center",color: "#888", fontSize:"10px",}}>
            {Date()}
          </span>
        </div>


      </div>
    );
  }
}



export default connect(
  null,
  dispatch => bindActionCreators({ deleteTask, toggleTodo }, dispatch)
) (styled(Task)`
  background: #222;
  position: relative;
  box-shadow: 0 0 30px 2px rgba(100, 255, 218, .3);
  border: 1px solid rgba(100, 255, 218, .3);
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-wrap: break-word;
  flex-flow: column;
  margin-left: 30px;
  margin-top: 30px;
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  color: #fff;
  text-transform: uppercase;
`);
