var todos = document.querySelector(".todos");
var addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", createTodo);
var input = document.getElementById("input");

function createTodo(e) {
  e.preventDefault();
  if (input.value) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var li = document.createElement("li");
    li.innerHTML = input.value;
    var checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.addEventListener('click',function(){
      li.classList.toggle('check');
    })
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener('click',function(){
      todos.removeChild(newDiv);
    })
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(li);
    newDiv.appendChild(checkBtn);
    newDiv.appendChild(deleteBtn);
    todos.appendChild(newDiv);
    input.value = "";
  }
  else{
    alert('Please Enter Value first')
  }
};