const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

    function getTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        // ? = if, : = else 이다.
        clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` :minutes }:${seconds < 10 ? `0${seconds}`: seconds }`;
        //hours가 10보다 작으면 0을붙인다.
        
    }

    function init(){
        getTime();
        setInterval(getTime, 1000);
    }
   
    init();