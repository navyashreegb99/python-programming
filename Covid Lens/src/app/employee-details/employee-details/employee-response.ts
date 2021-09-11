export interface Team{
    
    teamId: number;
    teamName: string;
    location: string;
    employees: Array<EmployeeDetails>;
    
    
}

export interface EmployeeDetails {

     empId: number;
    empName: string;
    doseOne: number;
    doseTwo: number;
    willing: number;
}
