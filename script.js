// 12-HOUR TIME VARIABLES
const twelveHourBox = document.getElementById('twelve-hour-time')
const hr = document.getElementById('hours')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')
const am_pm = document.getElementById('twelve-hour')
const timeFormat = document.getElementById('timeFormat')

// 24-HOUR TIME VARIABLES
const twentyFourHourBox = document.getElementById('twenty-four-hour-time')
const tfhr = document.getElementById('twenty-four-hours')
const tfmin = document.getElementById('twenty-four-minutes')
const tfsec = document.getElementById('twenty-four-seconds')

// DATE VARIALES
const month = document.getElementById('month')
const dayOfWeek = document.getElementById('dayOfWeek')
const year = document.getElementById('year')
const day = document.getElementById('day')

// BUTTON FOR SWITCHING BTW 12-HOUR AND 24-HOUR TIME
const switchFormat = document.getElementById('switchFormat')

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

// FUNCTION FOR 12-HOUR
function twelveHourDateTime() {
    let currentDate = new Date()

    let hour = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()
    sec.innerText = `${formatTime(seconds)}`
    hr.innerHTML = `${formatTime(hour)}:`
    min.innerHTML = `${formatTime(minutes)}:`
    sec.innerText = `${formatTime(seconds)}`

    timeFormat.innerText = currentDate.getHours() > 12 ? 'PM' : 'AM'

}
setInterval(twelveHourDateTime, 1000)

// FUNCTION FOR 24-HOUR TIME
function twentyFourHourDateTime() {
    let currentDate = new Date()

    let hour = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()
    tfhr.innerHTML = `${formatTime(hour)}:`
    tfmin.innerHTML = `${formatTime(minutes)}:`
    tfsec.innerText = `${formatTime(seconds)}`
}
setInterval(twentyFourHourDateTime, 1000)

// EVENT FOR SWITCHING BTW 12-HOUR AND 24-HOUR TIME
switchFormat.addEventListener('click', () => {
    twentyFourHourBox.classList.toggle('hide')
    twelveHourBox.classList.toggle('hide')
})


// DATE
let currentDay = new Date()
// dayOfWeek.innerHTML = `${days[currentDay.getDay()]},`
dayOfWeek.innerHTML = `${currentDay.toLocaleDateString('default', {weekday: 'short'})},`
// month.innerHTML = months[currentDay.getMonth()]
month.innerHTML = currentDay.toLocaleDateString('default', {
    month: 'long'
})
year.innerHTML = currentDay.getFullYear()
day.innerHTML = currentDay.getUTCDate()

// FORMATE TIME TO HAVE A ZERO BEFORE TIME IF IT IS LESS THAN 10 e.g 09, 08, 00, etc
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}