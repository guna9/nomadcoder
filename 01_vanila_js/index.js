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