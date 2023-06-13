var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
addButton.addEventListener("click", addTask);
function addTask() {
  var task = taskInput.value;
  if (task.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);


  var deleteButton = document.createElement("span");
  deleteButton.innerHTML ="\u00d7"
  deleteButton.classList.add("deleteButton");
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  
  taskInput.value = "";
}

taskList.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
      e.target.classList.toggle("checked");
      saveData();
  }
  else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData();

  }
},false);

function saveData(){
  localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
  taskList.innerHTML=localStorage.getItem("data");

}
showTask();