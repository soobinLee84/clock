const body = document.querySelector("body");

const IMG_NUMBER = 7;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    // + 1을 하는이유 : Math.random() 함수가 0을 줄 수 있기 때문
    image.classList.add("bgImage");
    //<table listener를 이미지화 하기 위해 even listener를 연결>
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}


 /**
     * 자바스크립트에서는 math라는 수학 내장함수가있다.
     * Math.random() -> 실수의 랜덤 숫자 뿌림
     * Math.random()*5 -> 5안에서 랜덤숫자 뿌림
     * Math.floor(3) -> 3아래의 소숫점 다 버리고 3됨 즉 내림
     * Math.ceil(3) -> 정수버리고 실수 취함 0.4835 즉 올림
     * floor (바닥) <-> ceiling(천장)
     */


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

