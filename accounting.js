"use strict";

// let myForm = document.getElementById("employeeForm")
// let employeesSectionEl = document.getElementById("employeeSection")
// let table = document.getElementById("table")

let retrieveData = localStorage.getItem("employee")
let arrayData = JSON.parse(retrieveData)
console.log(arrayData)

// console.log(employees)




let tr1 = document.getElementById("trEl1")
let tr2 = document.getElementById("trEl2")
let tr3 = document.getElementById("trEl3")
let tr4 = document.getElementById("trEl4")

let tfooter = document.getElementById("tFooter")

let admNumEmployee = document.createElement("td")
let mrkNumEmployee = document.createElement("td")
let finNumEmployee = document.createElement("td")
let devNumEmployee = document.createElement("td")

let admSalary = document.createElement("td")
let mrkSalary = document.createElement("td")
let finSalary = document.createElement("td")
let devSalary = document.createElement("td")

let admSalaryAvg = document.createElement("td")
let mrkSalaryAvg = document.createElement("td")
let finSalaryAvg = document.createElement("td")
let devSalaryAvg = document.createElement("td")

let allEmployees = document.createElement("td")
let totSalaries = document.createElement("td")
let avgAverages = document.createElement("td")

 function tableRender() {

    let admnNum = 0
    let mrktngNum = 0
    let fincNum = 0
    let devlpmtNum = 0
    // console.log(employees)
    for (let i = 0; i < arrayData.length; i++) {
        let depType = arrayData[i].department

        console.log(depType)
        switch (depType) {
            case "Administration":
                admnNum += 1
                break;
            case "Finance":
                fincNum += 1
                break;
            case 'Marketing':
                mrktngNum += 1
                break;
            case "Development":
                devlpmtNum += 1
        }
    }
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    for (let i = 0; i < arrayData.length; i++) {
        // console.log(arrayData[i].department)
        let add = parseInt(arrayData[i].salary)
        // console.log(avg)
        if (arrayData[i].department == "Administration") {
            sum1 += add
        } else if (arrayData[i].department == "Marketing") {
            sum2 += add
        } else if (arrayData[i].department == "Finance") {
            sum3 += add
        } else if (arrayData[i].department == "Development") {
            sum4 += add
        }
        let admAverage = sum1 / admnNum
        let mrkAverage = sum2 / mrktngNum
        let finAverage = sum3 / fincNum
        let devAverage = sum4 / devlpmtNum

        if (arrayData[i].department == "Administration") {
            admNumEmployee.textContent = admnNum
            admSalary.textContent = sum1
            admSalaryAvg.textContent = admAverage
        } else if (arrayData[i].department == "Marketing") {
            mrkNumEmployee.textContent = mrktngNum
            mrkSalary.textContent = sum2
            mrkSalaryAvg.textContent = mrkAverage

        } else if (arrayData[i].department == "Finance") {
            finNumEmployee.textContent = fincNum
            finSalary.textContent = sum3
            finSalaryAvg.textContent = finAverage

        } else if (arrayData[i].department == "Development") {
            devNumEmployee.textContent = devlpmtNum
            devSalary.textContent = sum4
            devSalaryAvg.textContent = devAverage

        }
        allEmployees.textContent = admnNum + mrktngNum + fincNum + devlpmtNum
        totSalaries.textContent = sum1 + sum2 + sum3 + sum4
        avgAverages.textContent = (admAverage + mrkAverage + finAverage + devAverage)/4
    }
}


tr1.appendChild(admNumEmployee)
tr2.appendChild(mrkNumEmployee)
tr3.appendChild(finNumEmployee)
tr4.appendChild(devNumEmployee)

tr1.appendChild(admSalary)
tr2.appendChild(mrkSalary)
tr3.appendChild(finSalary)
tr4.appendChild(devSalary)

tr1.appendChild(admSalaryAvg)
tr2.appendChild(mrkSalaryAvg)
tr3.appendChild(finSalaryAvg)
tr4.appendChild(devSalaryAvg)
tfooter.appendChild(allEmployees)
tfooter.appendChild(totSalaries)
tfooter.appendChild(avgAverages)


tableRender()

// getData()