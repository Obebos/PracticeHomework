let userInput = document.getElementById('userInput');
let buttonEnter = document.getElementById('enter');
let ul = document.querySelector('ul');

function inputLength() {
    return userInput.value.length > 0;
}

function createTodo() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';

    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('x'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTodoItem)

    let doneElement = document.createElement('button');
    doneElement.appendChild(document.createTextNode('✔'));
    li.appendChild(doneElement);
    doneElement.addEventListener('click', doneEl)

    function doneEl(){
        li.className = "done";
    }
    
    function deleteTodoItem() {
        li.classList.add('delete');
    }
}

function changeListAfterKeyPress(event) {
    if (inputLength() && event.which == 13) {
        createTodo();
    }
}


userInput.addEventListener('keypress', changeListAfterKeyPress);