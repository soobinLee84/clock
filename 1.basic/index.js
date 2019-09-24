const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handeleClick(){
title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handeleClick);
}

init();