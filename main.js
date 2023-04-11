"use strict";

let myForm = document.getElementById("employeeForm")
let employeesSectionEL = document.getElementById("employeeSection")



let employees = []
console.log(employees)

function Employee(id, fullName, department, level, image, min, max) {
    this.id = id;
    this.flName = fullName;
    this.department = department;
    this.level = level;
    this.img = image;
    this.min = min;
    this.max = max;
    // employees.push(this);
}

Employee.prototype.getRandomId = function (min, max) {
    this.id = Math.floor(Math.random() * (max - min + 1) + min)

}

Employee.prototype.render = function () {
    let imageEl = document.createElement("img")
    imageEl.src = this.img
    employeesSectionEL.appendChild(imageEl)

    let fullNameEl = document.createElement("h3")
    fullNameEl.textContent = `Name: ${this.flName}`
    employeesSectionEL.appendChild(fullNameEl)

    let departmentEl = document.createElement("p")
    departmentEl.textContent = `Department: ${this.department}`
    employeesSectionEL.appendChild(departmentEl)

    let levelEl = document.createElement("p")
    levelEl.textContent = `level: ${this.level}`
    employeesSectionEL.appendChild(levelEl)

    let idEl = document.createElement("p")
    idEl.textContent = `id: ${this.id}`
    employeesSectionEL.appendChild(idEl)



}
// function handle(){
//     let imag = document.createElement("img")
//     imag.src = './employee.png'
//     employeesSectionEL.appendChild(imag)
// }
// handle()

myForm.addEventListener("submit", eventHandler)
function eventHandler(event) {
    event.preventDefault()

    let image = event.target.image.value

    let fullName = event.target.fullName.value
    console.log(fullName)

    let department = event.target.select.value
    console.log(department)
    let level = event.target.level.value

    let newEmployee = new Employee(image,fullName, department, level)
    newEmployee.getRandomId(1000,1010)
    employees.push(newEmployee)
    newEmployee.render()
}

