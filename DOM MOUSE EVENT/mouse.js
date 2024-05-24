var main = document.querySelector(".main")

function fun1(){
    main.innerHTML ="On Mouse Over event"
    main.style.backgroundColor="Orange"
    main.style.color="white"
    console.log("On Mouse Over Event is called");
}
function fun2(){
    main.innerHTML ="On Mouse Enter Event"
    main.style.backgroundColor="red"
    main.style.color="white"
    console.log("On Mouse Over Event is called");
}