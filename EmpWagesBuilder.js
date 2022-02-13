/**
 * @Author: Atul Srivastav
 * @Date 11-Feb-2022
 * Employee Wages
 */
 class EmployeePayrollData{
                      
    // constructor
    constructor(...params) { 
        this.id = params[0];
        this.name = params[1]; 
        this.salary = params[2]; 
        this.gender = params[3]; 
        this.startDate = params[4];
        }
          
    // getter and setter method
    valueValidation(id,sal) {
        let valRegex=RegExp('^[1-9][0-9]*$');
      //  console.log(valRegex.test(id));
        if((valRegex.test(id))&&(valRegex.test(sal)))
            {
                return true;
            }
        else throw 'ID/Salary is incorrect!!'
    }
    
    get startDate()
    {
        return this._startDate;
    }
    set startDate(startDt){
            let currentDt=new Date();
            if(startDt<currentDt)
                this._startDate=startDt;
            else throw "Invalid start date!!"    
    }
    get gender() 
    { 
        return this._gender; 
    }
    set gender(gender) 
    { 
        let genderRegex=RegExp('^[M]|^[F]')
        if(genderRegex.test(gender))
            this._gender = gender;
        //else throw "Gender is incorrect!!";    
    }

    get name() 
    { 
        return this._name; 
    }
    set name(name) 
    { 
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!!'    
    }
   
    
    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                 this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", "+ 
            "gender=" + this.gender + ", startDate=" + empDate;
      
    }
}
    
let employeePayrollData = new EmployeePayrollData(1, "Marks", 30000); 
    console.log(employeePayrollData.toString());

    try{
            employeePayrollData.name = "Johnn";
            console.log(employeePayrollData.toString());

            employeePayrollData.gender = "M";
            console.log(employeePayrollData.toString());

            employeePayrollData.startDate= (new Date-1);
            console.log(employeePayrollData.toString());
            
            if(employeePayrollData.valueValidation(30,68123))
            {
                employeePayrollData.id = 30;
                employeePayrollData.salary = 68000;
            }    
            console.log(employeePayrollData.toString());
            
            if(employeePayrollData.valueValidation(-3,-68000))
                {
                    employeePayrollData.id = -3;
                    employeePayrollData.salary = -68000;
                }    
            console.log(employeePayrollData.toString());
    }
    catch(e)
    {
        console.error(e)
    }
let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date()); 
    console.log(newEmployeePayrollData.toString());
   