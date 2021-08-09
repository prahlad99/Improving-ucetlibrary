console.log("this is for jses6")
class Employee{
    constructor(name,experience,division){
    this.name=name;
    this.experience=experience;
     this.division=division;
    }
    slogan(){
        return `I am ${this.name} this company is best`
    }
    joiningyear(){
        return `2000-${this.experience}`; 
    }
    static add(a,b){
        return  a+b;
    }
    }

prahlad=new Employee("prahlad",0,8);
console.log(Employee.add(8,9)); 