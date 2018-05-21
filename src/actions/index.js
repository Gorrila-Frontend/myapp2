const addTask = task => {
    return {
        type: 'ADD_TASK',
        payload: task

    };
}, 

deleteTask = taskId => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    };
};
export  { addTask, deleteTask } ;