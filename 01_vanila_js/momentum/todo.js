const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  //JSON.stringify()는 javascript로 찍힌 텍스트를 문자열로 바꿔줌 : object -> '문자'
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    const newId = toDos.length + 1; //toDos 의 array값이 처음 0일때 +1 해서 아이디: 1이 된다
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); 
    saveToDos();  //push를 한 후 save해야 함
}

function handleSubmit(event){
    event.preventDefault();  //이벤트의 기본동작을 막음
    const currentValue = toDoInput.value; 
    paintToDo(currentValue); 
    toDoInput.value = "";  //input창 초기화
};


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);  //JSON.parse 는 stringify와 반대로 string이나 함수값을 objcet로 반환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })  //forEach는 array를 위한 function임. 기본적으로 함수를 실행하는데, array에 담겨있는 것들 각가에 한번씩 함수를 실행시켜 줌.
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);  //toDoForm에 input값이 submit 되면 handleSubmit 작동
};
init();

