import { Employee } from "./Employee";

export class EmployeeManager {
    static employees: Employee[] = [];
    constructor() {};
    show():void {
        console.log(EmployeeManager.employees);
    }
    add(employee: Employee):void {
        EmployeeManager.employees.push(employee);
    }
    delete(index:number):void {
        if(index >= 0 && index < EmployeeManager.employees.length) {
            EmployeeManager.employees.splice(index,1)
        } else {
            throw new Error("Delete Error: index");
        }
    }
    editFirstName(index:number, firstName: string) {
        if(index >= 0 && index < EmployeeManager.employees.length) {
            EmployeeManager.employees[index].setFirstName(firstName)
        } else {
            throw new Error("edit first name Error: index");
        }
    }
    editLastName(index:number, lastName: string) {
        if(index >= 0 && index < EmployeeManager.employees.length) {
            EmployeeManager.employees[index].setLastName(lastName)
        } else {
            throw new Error("edit last name Error: index");
        }
    }
    editBirthday(index:number, birthday: Date) {
        if(index >= 0 && index < EmployeeManager.employees.length) {
            EmployeeManager.employees[index].setBirthDay(birthday)
        } else {
            throw new Error("edit birthday Error: index");
        }
    }
    editAddress(index:number, address: string) {
        if(index >= 0 && index < EmployeeManager.employees.length) {
            EmployeeManager.employees[index].setAddress(address)
        } else {
            throw new Error("edit address Error: index");
        }
    }
    editRole(index:number, role: string) {
        if(index >= 0 && index < EmployeeManager.employees.length) {
            EmployeeManager.employees[index].setRole(role)
        } else {
            throw new Error("edit role Error: index");
        }
    }
}