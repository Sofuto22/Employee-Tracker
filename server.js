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
            "View Departments",
            "Remove Departments",
            "Add Departments",
            

        ],

},
])

.then((response) => {
    const {options} = response; {

    if (info.options === "View Employees") {
        viewEmployees();
    }

    if (info.options === "View Departments") {
        viewDepartments();
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
        viewRemoveRole90;
    }

    if (info.options === "View Budgets") {
        viewViewBudgets();
    }

    if (info.options === "View Departments") {
        viewAddDepartments();
    }

    if (info.options === "Remove Departments") {
        viewRemoveDepartments();
    }

    if (info.options === "Add Departments") {
        viewAddDepartments();
    }

     }
})
}

