import { combineReducers } from 'redux';

const tasksReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload.task];
      case 'TOGGLE_TODO':
      // console.log(state, !action.payload);
          if (action.payload === true) {
              return [...state, !action.payload ];
          }
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.taskId);
    case 'ENDED':
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducers
});
