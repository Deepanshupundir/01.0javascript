var imgs = ["img.jpg", "img2.jpg", "img3.jpg","img6.jpg",]
var slider = document.getElementById("slider")
var index = 0
function previous() {
    if (index == 0)
        index == imgs.length - 1
    else
        index--
    slider.src = imgs[index]

}
function next(){
if (index == imgs.length - 1)
    index = 0
 else 
 index++
}
 slider.src = imgs[index]


 var time = setInterval(next,2000)
 function playpause(option){
    if (option=="pause")
        clearInterval(time)
    else
    time = setInterval(next,2000)
 }
