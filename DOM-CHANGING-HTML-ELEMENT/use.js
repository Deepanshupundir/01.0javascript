var text1 = "ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolores dolorum ut mollitia earum pariatur , ipsam vero tempore itaque. Ratione voluptate alias veniam, adipisc quaerat harum saepe dolorum?"
var text2 = "Amet consectetur adipisicing elit. Aliquam dolores dolorum ut mollitia earum pariatur , ipsam vero tempore itaque. Ratione voluptate alias veniam, adipisc quaerat harum saepe dolorum?"
var btn = document.getElementById("btn")
var para = document.getElementById("para")
function fun() {

    if(btn.innerHTML == "change") {
         para.innerHTML = text2
        btn.innerHTML = "Reset"

    }
    else {
        para.innerHTML = text1
        btn.innerHTML = "change"
    }
}

