const form = document.getElementById('addForm');
const taskInput = document.getElementById('task-input');
const task = document.getElementsByClassName('task')
const taskList = document.getElementById('task-list');

// Form submit event
form.addEventListener('submit', addItem);


taskInput.addEventListener('click', removeItem);

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
}

function removeItem(e){
    if(e.target.class = delete-button ){
        const taskToRemove = e.target.parentElement;
        taskList.removeChild(taskToRemove);
      }
    
}

//function check-button that adds strike-through
//function button to delete item