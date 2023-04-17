"use strict";

let myForm = document.getElementById("employeeForm")
let employeesSectionEl = document.getElementById("employeeSection")




let employees = []
// console.log(employees) /// if you put this here the array will be empty because it will console it then push the objects that i submitted below

// its not mandotory to give a value to constructor param
function Employee( fullName,image, department, level, id,min, max) {
  /*very important note: matching the orderingof parameters between constructor and newEmployee parameters is sooooo important oterwise it will give false value(try console the newEmployee to see) */
  
  /* another important note that you should put  (id) in the last because its auto generated otherwise it will miss the values of other parameters */
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
//     employeesSectionEl.appendChild(imag)
// }
// handle()

myForm.addEventListener("submit", eventHandler)
function eventHandler(event) {
    event.preventDefault()

    let fullName = event.target.fullName.value
    console.log(fullName)
    
    let department = event.target.select.value
    console.log(department)
    let level = event.target.level.value
    
    let image = event.target.image.value
    console.log(image)

    let newEmployee = new Employee(fullName, image,department, level)
    newEmployee.getRandomId(1000,1010)
    // console.log(newEmployee)
    // employees.push(newEmployee)
    newEmployee.render()
console.log(employees)

}
