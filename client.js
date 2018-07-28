//Creating Employee Class
class Employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, salaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.id = idIn;
        this.title = titleIn;
        this.salary = salaryIn;
    }
}

//Creating an array to store employees
const employees = [];

//Creating a variable for calculating Total Monthly
let total = 0;


$(document).ready(readyNow);

//jQuery functions
function readyNow() {
    appendDom();
}

function appendDom() {
    //Creating employee table
    let table = $('<table></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>Id Number</th><th>Employee Title</th><th>Annual Salary</th></thead>');

    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);

    $('.container').append(table);
    //creating footer table
    $('.container').append('<table id="footerTable"></table>');
    $('#footerTable').append('<thead><tr><th id="totalMonthly">Total Monthly: ' + total + '</th></thead>');


    $('#submit-btn').on('click', submitInfo);
    //creating delete input and button
    $('.container').append('<input id="deleteInput" placeholder="Employee ID Number"></button>');
    $('.container').append('<button id="deleteButton">Delete Employee</button>');
    $('#deleteButton').on('click', deleteEmployee);

    function submitInfo() {
        //colect info from inputs

        let firstName = $('#firstNameInput').val();
        let lastName = $('#lastNameInput').val();
        let idNumber = $('#idInput').val();
        let title = $('#titleInput').val();
        let annualSalary = $('#salaryInput').val();

        //create an employee with inputs and add it to the array
        if (firstName == '' || lastName == '' || idNumber == '' || title == '' || annualSalary == '') {
            alert('All inputs must be filled.');
        }
        else { 
            let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
            employees.push(employee);

            //add employees to the Dom
            addEmployeeToDom(employees);

            //calaculate Total Monthly based off employees salaries
            calculateCosts(employees);
        }

        //clearing input fields
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#salaryInput').val('');
    }
    //calculate Total Monthly
    function calculateCosts(array) {
        total = 0;
        //loop through and add all employees salaries to total
        for (let i = 0; i < array.length; i++) {
            let person = array[i];
            total = total + person.salary;
        }
        //divide the new total by 12 to get the Total Monthly
        total = total / 12;

        //add the new Total Monthly to the Dom
        $('#footerTable').html('<thead><tr><th id="totalMonthly">Total Monthly: ' + total.toFixed(2) + '</th></thead>');
        //add a red background if Total Monthly is above 20000
        if (total > 20000) {
            $('#totalMonthly').toggleClass('redBackground');
        }
    }

    // adding employees to the Dom
    function addEmployeeToDom(array) {
        //empty the table
        $('#tableBody').empty();
        //add each employee from the array to the Dom
        for (let i = 0; i < array.length; i++) {
            const employee = array[i];
            tbody.append('<tr id="' + employee.id + '"><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td><td>' + employee.id + '</td><td>' + employee.title + '</td><td>' + employee.salary + '</td></tr>');
        }
    }

    //delete Employee and update Dom
    function deleteEmployee() {
        let input = $('#deleteInput').val();

        //remove employee from the array based on the given Id Number
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id == input) {
                employees.splice(i, 1);
                console.log(employees);

            }
        }
        //recalculate Total Monthly
        calculateCosts(employees);
        //remove employee from the Dom
        $('#' + input).remove();
        //clearing the input field
        $('#deleteInput').val('')
    }
}