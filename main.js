"use strict";

let myForm = document.getElementById("employeeForm")
let employeesSectionEl = document.getElementById("employeeSection")




let employees = []
// console.log(employees) /// if you put this here the array will be empty because it will console it then push the objects that i submitted below

// its not mandotory to give a value to constructor param
function Employee(id, fullName, department, level, image,salary) {
    this.flName = fullName;
    this.department = department;
    this.level = level;
    this.imge = image;
    this.salary = salary
    this.id = id;
    employees.push(this);
    
}


myForm.addEventListener("submit", eventHandler)
function eventHandler(event) {
    event.preventDefault()

    let fullName = event.target.fullName.value
    console.log(fullName)
    // console.log(this.fullName) // it will print you( <input name="fullName" id="fullName" type="text">)
    
    let department = event.target.select.value
    console.log(department)
    let level = event.target.level.value
    console.log(level)
    let image = event.target.image.value
    
    const newEmployee = new Employee(fullName, department ,level ,image) // the order is very important in the object parameters here
    newEmployee.randomId(1000,1010)
if(level =="Senior"){
    newEmployee.randomSalary(1500,2000)
}else if(level == "Mid-senior"){
    newEmployee.randomSalary(1000,1500)
}else if(level == "Junior"){
    newEmployee.randomSalary(500,1000)
}
    newEmployee.render()
    saveData(employees)
console.log(newEmployee)
}


Employee.prototype.randomId = function (min, max) {
    this.id = Math.floor(Math.random() * (max - min + 1) + min)

}
Employee.prototype.randomSalary = function (min, max) {
   let randomInt = Math.floor(Math.random() * (max - min + 1) + min)
    this.salary =  randomInt - .075*randomInt
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

function saveData(data){
    let stringifyData = JSON.stringify(data);
    localStorage.setItem("employee", stringifyData);
}
