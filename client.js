//Creating Employee Class
class Employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, salaryIn) {
      this.firstName = firstNameIn;
      this.lastName = lastNameIn;
      this.id = idIn;
      this.title = titleIn;
      this.salary = Number(salaryIn);
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
    $('.container').append('<input id="deleteInput" placeholder="Employee First Name"></button>');
    $('.container').append('<button id="deleteButton">Delete Employee</button>');
    $('#deleteButton').on('click', deleteEmployee);

    function submitInfo() {
        //colect info from inputs
        let firstName = $('#firstNameInput').val();
        let lastName = $('#lastNameInput').val();
        let idNumber = $('#idInput').val();
        let title = $('#titleInput').val();
        let annualSalary = $('#salaryInput').val();

        console.log(annualSalary);
        

        let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
        employees.push(employee);
        
        calculateCosts(employees);
        console.log(total);
        
        
        tbody.append('<tr><td>' + firstName + '</td><td>' + lastName +'</td><td>' + idNumber + '</td><td>' + title + '</td><td>' + annualSalary + '</td></tr>');
    
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#salaryInput') .val('');
    }

    function calculateCosts(array) {
        total = 0;
        for (let i = 0; i < array.length; i++) {
            let person = array[i];
            total = total + person.salary;
            console.log(total);
        }
        total = total / 12;
        console.log(total);
        $('#footerTable').html('<thead><tr><th id="totalMonthly">Total Monthly: ' + total.toFixed(2) + '</th></thead>');
        if (total > 20000){
            $('#totalMonthly').toggleClass('redBackground');
        }
    }

    function deleteEmployee() {
        let employee = $('#deleteInput').val();
    }
}