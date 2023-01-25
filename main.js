const company = {
    accounts :  [{name: "john", salary: 1600},
                {name:"Mary", salary: 1400} ],
    devlopment:{
        rd: [
            {name: "Andrew", salary: 3000},
            {name: "kessie", salary: 2700}],
        imp: [
            {name: "Smith", salary: 2700}
        ]
        
    }
}

function calculateSalary(parameter){
    if(Array.isArray(parameter)){
        return parameter.reduce((total= 0, person)=> total+person.salary, 0);
    }else{
        let total_salary = 0;
        for(const dept of depts){
            total_salary += calculateSalary(company[dept]);
            return total_salary
        }
    }
}