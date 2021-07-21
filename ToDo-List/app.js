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

    let lateElement = document.createElement('button');
    lateElement.appendChild(document.createTextNode('o'));
    li.appendChild(lateElement);
    lateElement.addEventListener('click', lateEl)

    
    
    let callElement = document.createElement('button');
    callElement.appendChild(document.createTextNode('D'));
    li.appendChild(callElement);
    callElement.addEventListener('click', callEl)

    

    function callEl(){
        let callE= prompt("deadline");
        let call = document.createElement('form');
        callElement.appendChild(document.createTextNode(callE));
        li.appendChild(callElement);
        console.log(callE);
    }

    function lateEl(){
        li.className = "late";
    }

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