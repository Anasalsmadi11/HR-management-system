"use strict";

let employees = []
console.log(employees)

function Employee(id, firstName, lastName, departmet, level, image, min, max) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.departmet = departmet;
    this.level = level;
    this.img = image;
    this.min = min;
    this.max = max;
    this.salary(); // instead of defining this method inside this constructor i defined it outside then called it here
    employees.push(this);
}

Employee.prototype.generate = function () {
    document.write(`<h3>${this.id}</h3>`)
    document.write(`<h2>${this.firstName} ${this.lastName}</h2>`)
    document.write(`<h3>${this.departmet}</h3>`)
    document.write(`<h3>${this.level}</h3>`)
    document.write(`<h3>${this.img}</h3>`)
    document.write(`<h3>${this.taxedSalary}</h3>`) /* aslong as it has (this) before it its considered from the constructor also i didnt put the (this.salary) instead of (this.taxedSalary) because it will give me an undefined because i didnt (return) any value inside it, it doesnt matter if i didnt put parameter called taxedSalary in the constructer (because itss not mandetory to give all the parameters a value) */
    document.write(`<hr>`)
}

function randomIntFromInterval(min, max) { // min and max are parameters(you can name them whatever you want) not from the constructor
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Employee.prototype.salary = function () {
    
    //     const rndInt = randomIntFromInterval(this.min, this.max)
//     //   console.log(rndInt)
//     this.taxedSalary = rndInt - 0.75 * rndInt
//     console.log(this.taxedSalary)
//     return this.taxedSalary

/* the problem with this solution is that its called more than once for each object one in line 25(when you put this.salary ) and another time inside this fuction 
so if you print employees[1].generate() more than once each time it will give you a different salary at the same time  */
// }

Employee.prototype.salary = function () {
    let ranInt = randomIntFromInterval(this.min,this.max)
    // console.log(ranInt)
        this.taxedSalary = Math.floor(ranInt - .075*ranInt)
    }
    
    let Ghazi = new Employee(1000, "Ghazi", "Samer", "Administration", "senior", "", 1500, 2000)
    let Lana = new Employee(1001, "Lana", "Ali", "Finance", "Senior", "", 1500, 2000)
    let Tamara = new Employee(1002, "Tamara", "Ayoub", "Markiting", "Senior", "", 1500, 2000)
    let Safi = new Employee(1003, "Safi", "Walid", "Administration", "Mid-Sir", "", 1000, 1500)
    let Omar = new Employee(1004, "Omar", "Zaid", "Development", "Senior", "", 1500, 2000)
    let Rana = new Employee(1005, "Rana", "Saleh", "Development", "junior", "", 500, 1000)
    let Hadi = new Employee(1006, "Hadi", "Ahmad", "Finance", "Mid-Sir", "", 1000, 1500)
    
    
    // Ghazi.generate()
    //  Ghazi.salary()
    for (let i = 0; i < employees.length; i++) {
        employees[i].generate();
        // employees[i].salary()
    }
    
    // employees[1].generate()
    // employees[1].generate()
    // employees[1].generate()
