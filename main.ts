import { Employee } from "./Employee";
import { EmployeeManager } from "./EmployeeManager";

let employees = new EmployeeManager();
employees.add(new Employee('viet','henry', new Date("2001-01-08"),"Ha Noi","developer"));
employees.add(new Employee('thu','thuy', new Date("2001-03-18"),"Rusia","doctor"));
employees.show();
employees.delete(1);
employees.show();
employees.editAddress(0,"Ha Nam")
employees.show()