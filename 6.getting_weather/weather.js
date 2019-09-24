const weather = document.querySelector(".js-weather");
const API_KEY = "ae6cd257601f366bcf4f63e200d59a6f";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
    return response.json()
    }).then(function (json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    //*주의 : 따옴펴가 아닌 backtick(`)을 사용할 것
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude ;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude

        /**
         * 자바스크립트는 같은이름으로 저장할 시에 이런 형식 가능하다
         * a: a,
         * b: b
         * = a,
         *   b
         */
    };//아빠
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function habdleFeoError(){
console.log("Can't access GEO location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, habdleFeoError);
    //navigator.geolocation.getCurrentPosition()의 첫 번째 파라미터는
    //좌표를 가져오는데 성공 했을 때의 처리하는 함수이다.
}

//좌표가 null 값이면 요청하고 아니면(else) location 에맞는 날씨 정보 가져옴
function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init() {
    loadCoords();
}

init();