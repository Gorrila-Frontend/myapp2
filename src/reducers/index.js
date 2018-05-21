import { combineReducers } from 'redux';

const tasksReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload.task];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.taskId);
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducers
});
