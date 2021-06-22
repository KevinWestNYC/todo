const form = document.getElementById('addForm');

form.addEventListener('submit', addItem);
form.addEventListener('submit', clearFields);
document.getElementById('task-list').addEventListener('click', removeItem);

function addItem(e){ 
    e.preventDefault();
    const text = document.getElementById('task-input').value;
    const taskList = document.querySelector("#task-list");
    const checkBox = createCheckBox();
    const task = createTask();
    const deleteButton = createDeleteButton(); 
    
    task.appendChild(checkBox);
    task.append(text);
    taskList.appendChild(task);
    task.appendChild(deleteButton);  
}

function createCheckBox(){
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.className = 'check-box'

    checkBox.addEventListener('click', e => {
        const taskLi = e.target.parentElement;
        taskLi.classList.toggle('done')
    })
    return checkBox;
}

function createTask() {
    const taskLi = document.createElement('li');
    taskLi.className = 'task';
    return taskLi;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.appendChild(document.createTextNode('X'));
    return deleteButton;
}

function clearFields() {
    document.getElementById('task-input').value = "";
}

function removeItem(e){
    if(e.target.classList.contains('delete-button')){
    const taskToRemove = e.target.parentElement;
    taskToRemove.remove();
    }
}