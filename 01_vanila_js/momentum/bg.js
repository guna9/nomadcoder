const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image = new Image();
    if(`${imgNumber}` == 5){
        image.src = `./images/${imgNumber}.jpg`;
    }else{
        image.src = `./images/${imgNumber + 1}.jpg`;  // 0.jpg는 없으니까 +1
    };
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * 6); //내가 갖고있는 이미지는 5개고 5.~~에서 반내림하니 이미지는 5까지 출력 || 올림으로 하면 Math.ceiling(Math.random() * 5);
    return number;
};

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
};

init();