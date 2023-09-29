const convertBtn = document.getElementById("convert-btn")
const unitInput = document.getElementById("unit-input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let inputNumber = 0
let feet = null
let meter = null
let liters = null
let gallons = null
let kilograms = null
let pounds = null

convertBtn.addEventListener("click", function() {
  inputNumber = unitInput.value
  convertMeasurements(inputNumber)
  render()
})

function convertMeasurements(inputNumber) {
  feet = (inputNumber * 3.281).toFixed(3)
  meter = (inputNumber / 3.281).toFixed(3)
  gallon = (inputNumber / 3.785).toFixed(3)
  liters = (inputNumber * 3.785).toFixed(3)
  pounds = (inputNumber * 2.205).toFixed(3)
  kilograms = (inputNumber / 2.205).toFixed(3)
}

function render(){
  console.log(feet, meter, gallon, liters, pounds, kilograms)
  lengthEl.textContent = `${inputNumber} meters = ${feet} feet | ${inputNumber} feet = ${meter} meters`
  volumeEl.textContent = `${inputNumber} liters = ${gallons} gallons | ${inputNumber} gallons = ${liters} liters`
  massEl.textContent = `${inputNumber} kilos = ${pounds} pounds | ${inputNumber} pounds = ${kilograms} kilos`
}