const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

//localStorage : 작은 정보를 유저 컴퓨터에 저장하는 방법
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);  //localStorage에 key와 value 저장
}

function handleSubmit(event){
    event.preventDefault();  //이벤트의 기본동작을 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);  //form에 input값이 submit 되면 handleSubmit 작동
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // 유저의 정보가 없는 경우
        askForName();
    }else {
        // 유저의 정보가 있는 경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
