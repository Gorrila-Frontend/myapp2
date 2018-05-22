import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Task from '../task/';
import { ended } from '../../actions/';
import { bindActionCreators } from 'redux';


class TaskList extends Component {

  render() {
    console.log(this.props.tasks);
    return (
      <div>
      <div>
        <div
          style={{
            marginLeft: "50px",
            marginBottom: "60px"
          }}
          className="tags">
      <a className="btn btn-success"
        onClick={() => console.log(this.props.tasks) }>
        All
      </a>
      <a className="btn btn-default">Active</a>
      <a className="btn btn-default">Deleted</a>
      <a className="btn btn-default">Ended</a>
     </div>
        <span style={{
              fontSize: "22px",
              marginLeft: "10%",
              color: "#fff",
          }}>Task</span>
          <hr style={{
              background: "#fff",
              border: "solid 0.5px #fff",
              width: "90%",
              margin: "0 auto"
          }}/>

      </div>
      <div>

      </div>
      <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        }}
        >
            {
              this.props.tasks.map((task, index) => {
                return <Task  id="task" key={index} task={task} />;
              })
            }
      </div>

      </div>
    );
  }
}


export default connect(
  state => ({
    tasks: state.tasks,
    isEnded: true,
  })
)(TaskList);
