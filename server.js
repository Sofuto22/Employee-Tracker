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
        viewBudgets();
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
    CONCAT (department_name, "", role_name)
};
const viewAddEmployee = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "firstName",
            message: "First name of the employee",
        },

        {
            type: "input",
            name: "lastName",
            message: "Last name of the employee",
        },
    ])

    .then((options))

};
const viewRemoveEmployee = () => {
    let request = `SELECT employee.id, first_name, last_name FROM employee`;

    inquirer.prompt ([
         {
            name: "selectEmployee",
            type: "list",
            message: "Who would you like to remove?",
            choices: employeeNamesArray,
         },
    ])

};
const viewUpdateRole = () => {
    let request = `SELECT employee.id, first_name, last_name, role_id`;
    inquirer.prompt ([
        {
            name:"selectRole",
            type:"list",
            message:"Which role would you like to switch to",
            choices: roleArray,
        },
    ])

};
const viewRemoveRole = () => {
    let request = `SELECT employee.id, first_name, last_name, role_id`;
    inquirer.prompt ([
        {
            name: "selectRole",
            type: "list",
            message: "Which role do you want to remove?",
            choices: roleArray,
        },
    ])

};
const viewAddDepartments = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "Department",
            message: "Department Name",
        },

        {
            type: "input",
            name: "ID",
            message: "Department ID",
        },
    ])

    .then((options))


};
const viewRemoveDepartments = () =>{
    let request =`SELECT employee.id, first_name, last_name, department_id_id`;
    inquirer.prompt ([
        {
            name: "selectDepartment",
            type: "list",
            message: "Which department do you want to remove?",
            choices: roleDepartment,
        },
    ])
};
const viewBudgets = () => {
    let request = `SELECT department_name role_id`;
    inquirer.prompt ([
        {
            name:"selectDepartmentBudget",
            type:"list",
            message:"Which budget do you want to view?",
            choices: roleBudget,
        },
    ])

};
