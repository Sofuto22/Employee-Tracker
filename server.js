const connection = require("./connection");
const inquirer = require("inquirer");

const askUser = () => {
    inquirer.prompt([ {

        names:"options",
        type: "list",
        message: "Select an option.",
        choices:[
            "View Employees",
            "View Departments",
            "Add Employee",
            "Remove Employee",
            "Update Role",
            "Remove Role",
            "View Budgets",
            "Remove Departments",
            "Add Departments",
            

        ],

},
])

.then((response) => {
    const {options} = response; 

    if (info.options === "View Employees") {
        viewEmployees();
    }

    if (info.options === "Add Employee") {
        viewAddEmployee();
    }

    if (info.options === "Remove Employee") {
        viewRemoveEmployee();
    }
     if (info.options === "Update Role") {
        viewUpdateRole();
     }

    if (info.options === "Remove Role") {
        viewRemoveRole();
    }

    if (info.options === "View Budgets") {
        viewViewBudgets();
    }

    if (info.options === "View Departments") {
        viewDepartments();
    }

    if (info.options === "Remove Departments") {
        viewRemoveDepartments();
    }

    if (info.options === "Add Departments") {
        viewAddDepartments();
    }

     
});
};

const viewEmployees = () => {
    const request = `SELECT employee.id, employee.first_name, employee.last_name`,
    CONCAT(first_name, "", last_name) AS "employee name"
    console.log("viewing all employees")

};
const viewDepartments = () => {
    const request = `SELECT  first_name, last_name, department.id, role_id`,
    CONCAT (department_name, "", role_name),
};
const viewAddEmployee = () =>
const viewRemoveEmployee = () =>
const viewUpdateRole =>
const viewRemoveRole =>
const viewAddDepartments =>
const viewRemoveDepartments =>
const viewBudgets =>
