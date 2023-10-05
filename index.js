/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputValue = document.getElementById("number-input")
const metersFeet = document.getElementById("meter-feet")
const kilosPounds = document.getElementById("kilos-pounds")
const litersGallons = document.getElementById("liters-gallons")
const errorMsg = document.getElementById("error-msg")

convertBtn.addEventListener("click", function() {
    let value = inputValue.value
    renderError()
    if (value > 0) {
        metersFeet.innerHTML = `${value} meters = ${(value * 3.28084).toFixed(3)} feet | ${value} feet = ${(value * 0.3048).toFixed(3)} meters`
        kilosPounds.innerHTML = `${value} kilos = ${(value * 2.20462).toFixed(3)} pounds | ${value} pounds = ${(value * 0.453592).toFixed(3)} kilos`
        litersGallons.innerHTML = `${value} litters = ${(value * 3.78541).toFixed(3)} gallons | ${value} gallons = ${(value * 0.264172).toFixed(3)} liters`
    }
})

const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", function() {
    metersFeet.innerHTML = ""
    kilosPounds.innerHTML = ""
    litersGallons.innerHTML = ""
    inputValue.value = ""
    errorMsg.innerHTML = ""
})

function renderError() {
    if (inputValue.value = null || inputValue.value < 1) {
        errorMsg.innerHTML = `Please add an integer greater than 0`
    } else {
        errorMsg.innerHTML = ""   
    }
}
