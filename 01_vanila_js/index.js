/*const gunaInfo = {
    name: "guna",
    age: "28",
    gender: "woman",
    isBeautiful: true,
    favMovies : ["올드보이", "아메리칸호러", "신과함께"],
    favFood : [
        {name: "kimchi", fatty: false,},
        {name:"cheese burger", fatty:true}
    ]
}
console.log(gunaInfo.favMovies[2]);
console.log(gunaInfo.favFood[1].name);
console.log(gunaInfo, console);*/


/*function sayHello(name, age){
    return `hello ${name} you are ${age} years old`;
}

const greetGuna = sayHello("guna", 28);
console.log(greetGuna);*/


/*const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);
*/

/*const title = document.getElementById("title");
console.log(title);  //script의 위치가 body안으로 이동

console.error("Fuck!");

title.innerHTML = "hi! from js " //html안에 #title 오브젝트를 변경
title.style.color = 'red';
console.dir(title);
console.log(document);
document.title = "i own you now"; //html의 title을 변경
*/

/*const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized");
}
window.addEventListener("resize", handleResize);   // '함수()' vs '함수' : '함수()'<<이건 함수를 바로 즉시 시작해라 라는 뜻이고 '함수' 는 함수를 바로 즉시 실행시키지 않을거란 뜻 : 결과는 새 창에 console이 바로 찍히지 않고 윈도우사이즈를 리사이징 시킬시에 함수 발생.
*/

/*const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);   
*/


/*const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    title.innerHTML = "change font color !"
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
}

title.addEventListener("click", handleClick);
init();
 */  //2-6까지 내용

const title = document.querySelector("#title");

const CLICKED_CLASS = 'clicked';

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
        console.log("remove 'clicked' class");
    }else {
        title.classList.add(CLICKED_CLASS);
        console.log("add 'clicked' class");
    }*/
    //위에랑 같은 내용이지만 토글로 간략하게 줄임
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

//https://developer.mozilla.org/ko/docs/Web/API/Element/classList classList에 사용가능한 메서드 참조