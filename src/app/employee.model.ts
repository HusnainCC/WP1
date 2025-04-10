// employee.model.ts
export interface Department {
    id: number;
    name: string;
  }
  
  export interface Employee {
    id: number;
    name: string;
    password: string;
    deptId: number;
    department: Department; 
  }
  