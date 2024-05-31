

var center = document.querySelector('.center')
var first = document.querySelector('.first')
var second = document.querySelector('.second')

var days = document.getElementById("days")
var hours = document.getElementById("Hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("second")
var targetTime = new Date(2024,6,19)
setInterval(() => {
    let currentTime = new Date()
    let diff = targetTime - currentTime

    if (diff > 0) {
        //Calculation for Days
        let num = parseInt(diff / (1000 * 60 * 60 * 24))
        if (num < 10)
            days.innerHTML = `0${num}`
        else
            days.innerHTML = num

        //Calculation for Hours
        num = parseInt((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        if (num < 10)
            hours.innerHTML = `0${num}`
        else
            hours.innerHTML = num

        //Calculation for Minutes
        num = parseInt((diff % (1000 * 60 * 60)) / (1000 * 60))
        if (num < 10)
            minutes.innerHTML = `0${num}`
        else
            minutes.innerHTML = num

        //Calculation for Seconds
        num = parseInt((diff % (1000 * 60)) / 1000)
        if (num < 10)
            seconds.innerHTML = `0${num}`
        else
            seconds.innerHTML = num
    }
    else {
        center.removeChild(second)
        first.innerHTML = "Birthday "
    }
}, 1000)
