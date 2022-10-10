/* getting task from input */
function get_todos(){
    var todos = new Array;      /* creates array from input*/
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null){
        todos=JSON.parse(todos_str);
    }
    return todos;
}

/* function to add inputted task to the get_todos array */
function add(){
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value="";
    show();

    return false;
}

/*function for keeping tasks permanently displayed*/
function show(){
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id=" '+ i + '">x</button></li>';

    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();

function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}