const form = document.getElementById('addForm');
const taskInput = document.getElementById('task-input');
const task = document.getElementsByClassName('task')
const taskList = document.getElementById('task-list');

form.addEventListener('submit', addItem);
form.addEventListener('submit', clearFields);
taskList.addEventListener('click', removeItem);

function addItem(e){ 
    e.preventDefault();
        
    const newTask = document.getElementById('task-input').value;
    const createNewTask = document.createElement('li');
    document.querySelector("#task-list").appendChild(createNewTask);
    createNewTask.className = 'task';

    const checkBox = createCheckBox()
    createNewTask.appendChild(checkBox);

    createNewTask.appendChild(document.createTextNode(newTask));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.appendChild(document.createTextNode('X'));
    createNewTask.appendChild(deleteButton); 
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

function createCheckBox(){
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.className = 'check-box'

    checkBox.addEventListener('click', e => {
        const taskLi = e.target.parentElement;
        if (checkBox.checked){
            taskLi.style.textDecoration = "line-through";
            } else if(checkBox.checked === false){
                taskLi.style.textDecoration = null;
         } 
    })
    return checkBox;
}