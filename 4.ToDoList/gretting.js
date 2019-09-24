const form = document.querySelector(".js-form"), 
      input = form.querySelector("input"), //what is your name?
      greeting = document.querySelector(".js-greetings");

      const USER_LS = "currentUser", //user localstorage
      SHOWING_CN = "showing";   // Class Name

//이름을 기억해야함.(localStorage에 저장해야함)
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    
     if(currentUser === null){
         askForName();
     }else{
         ///she is
         paintGreeting(currentUser);
     }
}
//user가 들어와 있으면 이름에 컬러로 색칠
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//submit(제출)하면실행되는 함수
function handleSubmit(event){
    //submit은 내용을 입력하고 엔터치면 어디론가 보내려는
    //"디폴트" 값이 있으므로 preeventDefault() -> 기본값제거 해줘야 한다.
    event.preventDefault();
    const currentValue = input.value;

    //paintGreeting()은 텍스트를 필요한다.
    paintGreeting(currentValue);
    saveName(currentValue);
}

//currentUser가 없으면 user의 이름을 요청할 것이다.
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
    //폼에 이벤트를 추가한다.제출했을시. handleSubmit()함수를 실행한다.
}



function init(){
    loadName();
}

init();
