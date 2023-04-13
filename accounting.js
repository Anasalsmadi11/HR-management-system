"use strict";

// let myForm = document.getElementById("employeeForm")
// let employeesSectionEl = document.getElementById("employeeSection")
let table = document.getElementById("table")


// let employees = []


function getData(){
    let retrieveData = localStorage.getItem("employee")
    let arrayData = JSON.parse(retrieveData)
    console.log(arrayData)

    if(arrayData != null){
        for(let i = 0 ;i<arrayData.length; i++){
           //her i should render the table and the employees numbers and avg for all of them 
        }
    }
}

getData()

// Employee.prototype.renderTable = function(){

//     let trEl = document.createElement("tr")
//     table.appendChild(trEl)

//     let departmentName= document.createElement('td')
//     departmentName.textContent = this.department
//     trEl.appendChild(departmentName)

//     let numOfEmployees= document.createElement('td')
//     numOfEmployees.textContent= this.dNumEmployees
//     trEl.appendChild(numOfEmployees)

//     let dTotalSalary= document.createElement('td')
//     dTotalSalary.textContent= this.dTotSalary
//     trEl.appendChild(dTotalSalary)

//     let dAverageSalary= document.createElement('td')
//     dAverageSalary.textContent = this.dAvgSalary
//     trEl.appendChild(dAverageSalary)
    
//     let trEl1 = document.createElement("tr")
//     table.appendChild(trEl1)

//     let total = document.createElement("td")
//     total.textContent = "Total"
//     trEl1.appendChild(total)
//     let totalEmployees = document.createElement("td")
//     totalEmployees.textContent = this
// }

console.log(employees)