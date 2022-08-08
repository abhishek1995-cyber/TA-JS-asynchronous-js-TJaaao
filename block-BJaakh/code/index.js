let rootEle = document.querySelector("ul");
let inputBox = document.querySelector(".userinput");
// let baseUrl = "https://basic-todo-api.vercel.app/api/todo";

function createUi(dataObj) {
  rootEle.innerHTML = " ";
  dataObj.todos.forEach((eachTodo) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("data-id", eachTodo._id);
    // if we check the input then isCompleted  value is to be true
    input.addEventListener("input", handleCheck);
    let p = document.createElement("p");
    p.innerText = eachTodo.title;

    let span = document.createElement("span");
    // when click event triggred on cancle button we will delete that particular todo
    span.addEventListener("click", handleDeleteTodo);
    span.innerHTML = ` <i class="fas fa-window-close close-btn" data-id = ${eachTodo._id}></i>`;
    li.append(input, p, span);
    rootEle.append(li);
    return rootEle;
  });
}
// createUi();
// Adding a event listner keyup so and it will give us the value of the userinput only if
// user has pressed enter (keyCode of enter  is 13).
inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    rootEle.innerHTML = " ";
    addTodo(event.target.value, false);
    getData();
  }
});

//Function get data from the api and render the data in our user interface
function getData() {
  return fetch("https://basic-todo-api.vercel.app/api/todo")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      createUi(data);
    });
}
getData();

//function to add data inside the api. This function will accept  the data as a input and add
//  that data inside the api
function addTodo(todo, isDone) {
  let data = {
    todo: {
      title: todo,
      isCompleted: isDone,
    },
  };
  //Adding  the data inside the api
  fetch("https://basic-todo-api.vercel.app/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

// function to delete  the todo from the api means the todo is completed
function deleteTodo(idOftodo) {
  fetch("https://basic-todo-api.vercel.app/api/todo/" + idOftodo, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// handle the click event on the delete button and delete the todo
function handleDeleteTodo(event) {
  deleteTodo(event.target.dataset.id);
  getData();
}
// handle the click event on the input when we check and uncheck it isCompleted value in the api get updated
function handleCheck(event) {
  // console.log(event.checked);
  updateIsComplete(event.target.dataset.id, event.target.checked);
}

// function to update isCompleted value in the api
function updateIsComplete(idOftodo, value) {
  let data = {
    isCompleted: value,
  };
  fetch("https://basic-todo-api.vercel.app/api/todo/" + idOftodo, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}


