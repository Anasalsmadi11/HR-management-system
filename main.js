"use strict";

let myForm = document.getElementById("employeeForm")
let employeesSectionEl = document.getElementById("employeeSection")




let employees = []
// console.log(employees) /// if you put this here the array will be empty because it will console it then push the objects that i submitted below

// its not mandotory to give a value to constructor param
function Employee(id, fullName, department, level, image, min, max) {
    this.id = id;
    this.flName = fullName;
    this.department = department;
    this.level = level;
    this.imge = image;
    // this.min = min; // uncomment this and go the console you will see it inside the objects array as undifind like this(/*department:"Development",flName:"Emma Jhones",id:1002,imge:undefined,level:"Senior",min:undefined */)

    // this.max = max;
    employees.push(this);
}

Employee.prototype.getRandomId = function (min, max) {
    this.id = Math.floor(Math.random() * (max - min + 1) + min)

}

Employee.prototype.render = function () {
    


        let imageEl = document.createElement("img");
        imageEl.src = this.imge;
        employeesSectionEl.appendChild(imageEl)
    
        let fullNameEl = document.createElement("h3")
        fullNameEl.textContent = `Name: ${this.flName}`
        employeesSectionEl.appendChild(fullNameEl)
    
        let departmentEl = document.createElement("p")
        departmentEl.textContent = `Department: ${this.department}`
        employeesSectionEl.appendChild(departmentEl)
    
        let levelEl = document.createElement("p")
        levelEl.textContent = `level: ${this.level}`
        employeesSectionEl.appendChild(levelEl)
    
        let idEl = document.createElement("p")
        idEl.textContent = `id: ${this.id}`
        employeesSectionEl.appendChild(idEl)
}
// function handle(){
//     let imag = document.createElement("img")
//     imag.src = './assets/Captureee.png'
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
    // employees.push(newEmployee)
    newEmployee.render()
console.log(employees)

}
