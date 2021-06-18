const form = document.getElementById('addForm');
const taskInput = document.getElementById('task-input');
const task = document.getElementsByClassName('task')
const taskList = document.getElementById('task-list');

form.addEventListener('submit', addItem);
form.addEventListener('submit', clearFields);
taskList.addEventListener('click', removeItem);
taskList.addEventListener('click', strikeThrough);

function addItem(e){ 
    e.preventDefault();
        
    const newTask = document.getElementById('task-input').value;
    const createNewTask = document.createElement('li');
    document.querySelector("#task-list").appendChild(createNewTask);
    createNewTask.className = 'task';
    createNewTask.appendChild(document.createTextNode(newTask));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.appendChild(document.createTextNode('X'));
    createNewTask.appendChild(deleteButton); 
    
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.className = 'check-box'
    createNewTask.appendChild(checkBox);
}

function clearFields() {
    taskInput.value = "";
}

function removeItem(e){
    if(e.target.classList.contains('delete-button')){
    const taskToRemove = e.target.parentElement;
    taskList.removeChild(taskToRemove);
    }
}

function strikeThrough(e){
    const checkBox = document.querySelector('.check-box')
    if(e.target.classList.contains('check-box')){
        const taskToStrikethrough = e.target.parentElement;
        if (checkBox.checked === true){
            taskToStrikethrough.style.textDecoration = "line-through";
        } else {
            taskToStrikethrough.style.textDecoration = null;
        } 
    }
}

//function check-button that adds strike-through
