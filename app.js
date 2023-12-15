const yearInput = document.getElementById("year")
const dayInput = document.getElementById("day")
const monthInput = document.getElementById("month")

const yearOutput = document.getElementById("yy")
const dayOutput = document.getElementById("dd")
const monthOutput = document.getElementById("mm")

const form = document.querySelector("form")

form.addEventListener("submit", handleSubmite)

const date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function Validation() {
  const inputs = document.querySelectorAll("input")
  let validator = true
  inputs.forEach((i) => {
    const parent = i.parentElement
    if (!i.value) {
      i.style.borderColor = "red"
      parent.querySelector("small").innerText = "this field is required"
      validator = false
    } else if (monthInput.value > 12 || monthInput.value <= 0) {
      monthInput.style.borderColor = "red"
      monthInput.parentElement.querySelector("small").innerText =
        "must be a  valid month"
      validator = false
    } else if (dayInput.value > 31 || dayInput.value <= 0) {
      dayInput.style.borderColor = "red"
      dayInput.parentElement.querySelector("small").innerText =
        "most be a valid day"
      validator = false
    } else if (parseInt(yearInput.value) > year) {
      yearInput.style.borderColor = "red"
      yearInput.parentElement.querySelector("small").innerText =
        "must be a valid year"
    } else {
      i.style.borderColor = "black"
      parent.querySelector("small").innerText = ""
      validator = true
    }
  })
  return validator
}

function handleSubmite(event) {
  event.preventDefault()
  if (Validation()) {
    if (dayInput.value > day) {
      day = day
    } else if (dayInput.value < day) {
      day = day - dayInput.value 
    } else {
      day = 0
    }
    if (monthInput.value > month) {
      month = month + 12
      year = year - 1
    }
    const d = day
    const m = month - monthInput.value
    const y = year - yearInput.value

    dayOutput.innerHTML = d
    monthOutput.innerHTML = m
    yearOutput.innerHTML = y

    day = date.getDate()
    month = date.getMonth()
    year = date.getFullYear()
  }
}
