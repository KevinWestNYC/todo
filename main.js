var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


function addItem(e){
    e.preventDefault();
    
    const newItem = document.getElementById('item').value;
    const createNewTask = document.createElement('li')
    document.querySelector(".list-group").appendChild(createNewTask);
    createNewTask.className = "list-group-item"
    createNewTask.appendChild(document.createTextNode(newItem));

}

function removeItem(e){
    e.preventDefault();

    
}

//function reset the submit form
//function checkbutton that adds strikethrough
//function button to delete item