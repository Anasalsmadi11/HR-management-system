
"use strict";

let myForm = document.getElementById("employeeForm")
let employeesSectionEl = document.getElementById("employeeSection")
let table = document.getElementById("table")




let employees = []
// console.log(employees) /// if you put this here the array will be empty because it will console it then push the objects that i submitted below

// its not mandotory to give a value to constructor param
function Employee(fullName, department, level, image, salary, id) {
    this.fName = fullName;
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

    let fullName = event.target.fName.value;
    console.log(fullName);
    // console.log(this.fullName) // it will print you( <input name="fullName" id="fullName" type="text">)

    let department = event.target.select.value;
    console.log(department);
    let level = event.target.level.value;
    console.log(level);
    let image = event.target.image.value;

    const newEmployee = new Employee(fullName, department, level, image) // the order is very important in the object parameters here
    newEmployee.randomId(1000, 1010)
    if (level == "Senior") {
        newEmployee.randomSalary(1500, 2000)
    } else if (level == "Mid-senior") {
        newEmployee.randomSalary(1000, 1500)
    } else if (level == "Junior") {
        newEmployee.randomSalary(500, 1000)
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
    this.salary = Math.floor(randomInt - .075 * randomInt)
}

Employee.prototype.render = function () {

    let imageEl = document.createElement("img");
    imageEl.src = this.imge;
    employeesSectionEl.appendChild(imageEl)

    let fullNameEl = document.createElement("h3")
    fullNameEl.textContent = `Name: ${this.eName}`
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

console.log(employees)

function saveData(data) {
    let stringifyData = JSON.stringify(data);
    localStorage.setItem("employee", stringifyData);
}

let arrayData
function getData() {
    let retrieveData = localStorage.getItem("employee")
    arrayData = JSON.parse(retrieveData)
    console.log(arrayData)
    console.log(employees)
    // console.log(arrayData[0].department)

    if (arrayData != null) {

        for (let i = 0; i < arrayData.length; i++) {
            new Employee(arrayData[i].fName, arrayData[i].department, arrayData[i].level, arrayData[i].image);
            //her i should render the table and the employees numbers and avg for all of them 
            employees[i].tableRender()
            // employees[i].randomSalary(1000,2000)
            console.log(employees[i].level)
            if (arrayData[i].level == "Senior") {
                employees[i].randomSalary(1500, 2000)
            } else if (arrayData[i].level == "Mid-senior") {
                employees[i].randomSalary(1000, 1500)
            } else if (arrayData[i].level == "Junior") {
                employees[i].randomSalary(500, 1000)
            }
        }

    }
    console.log(employees) //notice here that the salary in it is changing every time i refresh the page 
    console.log(arrayData)// here the salary and id are constant even if i refresh the page , the reason is because this array is getting the data from the local storage and the salary and id are constant their for each object once you generate them
}