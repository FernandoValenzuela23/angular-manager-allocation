export class Employee{
    id: number;
    typeName: string;
    salary: number;
    idManager: number;
    listEmployees: Employee[];

    constructor(_id: number, _type: string, _salary: number, _idManager: number) {
        this.id = _id;
        this.typeName = _type;
        this.salary = _salary;
        this.idManager = _idManager;
        this.listEmployees = [];
    }
}