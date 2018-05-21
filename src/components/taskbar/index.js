import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTask } from '../../actions/';
import uuid from 'uuid';

import '../../index.css';
import { bindActionCreators } from 'redux';

class TaskBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <input
          className="input-group"
          type='text'
          ref='task'
          placeholder='add new task'
          style={{
            display: "block",
            margin: "50px auto 0  auto",
            height: "35px",
            width: "400px",
            borderRadius: "5px",
            border: "solid 1px #64FFDA",
            background: "transparent",
            color: "#fff",

          }}
        />
        <button
          style={{
            display: "block",
            position: "relative",
            height: "35px",
            width: "150px",
            marginTop: "50px"
          }}
          className="btn btn-primary"
          onClick={() => {
            this.props.addTask({
              text: this.refs.task.value,
              id: uuid(),
            })
          }}>
          Add Task
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addTask }, dispatch),
)(styled(TaskBar) `
    display: flex;
    position: relative;
    justify-content: center;
    align-atems: center;
    margin: 0 auto;
    width: 630px;
    background: #555;
`);