const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//이름을 기억해야함.(localStorage에 저장해야함)
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

//submit(제출)하면 실행되는 함수

function handleSubmit(event){
    //submit은 내용을 입력하고 엔터 치면 어디론가 보내려는
    //"디폴트" 값이 있으므로 preventDefault()-> 기본값제거 해줘야 한다.
    event.preventDefault();
    const currentValue = input.value;
    
    //paintGreeting()은 텍스트를 필요한다.
    paintGreeting(currentValue);
    saveName(currentValue);
    
}


//currentUser가 없으면 user의 이름을 요청할것이다.
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

//user가 들어와 있으면 이름에 컬러로 색칠
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        //she is
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();