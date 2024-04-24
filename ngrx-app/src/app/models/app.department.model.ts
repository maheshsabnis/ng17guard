export class Department {
  constructor(
    public DeptNo:number,
    public DeptName: string,
    public Location: string,
    public Capacity: number
  ){}
}


export const depts = [
   new Department(10,'HRD', 'Pune', 1111)  
];