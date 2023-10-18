const inputBox = document.querySelector('#input')
const listContainer = document.querySelector('#list-container')
const todo = document.querySelector("#todo")

function addTodo(){
    let value = inputBox.value;
    if(value === ""){
    alert("you must type something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML= value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData (){
    localStorage.setItem('todo', listContainer.innerHTML);
}
function getData(){
   let data= localStorage.getItem('todo')
   listContainer.innerHTML = data;
}
getData();