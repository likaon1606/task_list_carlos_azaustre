const tasksList = document.querySelector("#tasks-list");
const newTaskInput = document.querySelector("#new-task-input");
const addTaskButton = document.querySelector("#add-task-button")

const tasks = [];

const app = {
    tasks,
    tasksList,
    newTaskInput,
};

function createTask(title, isCompleted = false) {
    return {
        id: Date.now(),
        title,
        isCompleted,
    };
};

function addTaskToList(task, taskList) {
    const taskELement = createTaskElement(task);
    taskList.appendChild(taskELement);    
};

function addTask(app) {
    const newTaskTitle = app.newTaskInput.value;
    const newTask = createTask(newTaskTitle);
    app.tasks.push(newTask);

    addTaskToList(newTask, app.tasksList);
    app.newTaskInput.value = "";
}
