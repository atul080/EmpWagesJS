/**
 * @Author: Atul Srivastav
 * @Date 10-Feb-2022
 * Employee Wages
 */
//constant declarations

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const NUM_OF_WORKING_DAYS = 20;

/**
 * get Working Hours 
 */
function getWorkingHours(empCheck) 
{ 
    switch (empCheck) //case
    { 
        case IS_PART_TIME: 
            return PART_TIME_HOURS; 
        case IS_FULL_TIME: 
            return FULL_TIME_HOURS; 
        default: 
            return 0; 
    } 
}

let empHrs = 0; 
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) // loop
    { 
        let empCheck = Math.floor(Math.random() * 10) % 3; //generate Random 
        empHrs += getWorkingHours(empCheck); //add hours
    }
let empWage = empHrs * WAGE_PER_HOUR; //calculate wage
console.log("Emp Wage: " + empWage); //log wage
let empWage = totalEmpHrs * WAGE_PER_HOUR; //calculate wage
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " +totalEmpHrs + " Emp Wage: " + empWage); //log output