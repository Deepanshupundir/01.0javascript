var center = document.querySelector(".center")
var Second = document.querySelector(".Second")

var count = 1
function createitem() {
  var p = document.createElement("p")
  p.innerHTML = `This is a paragraph p${count}<span class="material-symbols-outlined"
   onclick="deleteitem"('p${count}')">delete</span>`

  p.id = `p${count}`
  count++
  Second.appendChild(p)
}
function deleteitem(id) {
  var p = document.getElementById(id)
  Second.removeChild(p)
}
function deleteFirst(){
  if(Second.childNodes.length>0) {
    var p = Second.childNodes[0]
    Second.removeChild(p)
  }
}

function deleteAll(){
  if(Second.childNodes.length>1){
    center.removeChild(Second)
    Second = document.createElement("div")
    Second.classList.add("Second")
    center.appendChild(Second)
  }
}
