$(document).ready(readyNow);

function readyNow() {
    $('#submit-btn').on('click', submitInfo)
}

function submitInfo() {
    let firstName = $('#firstNameIn').val();
    console.log(firstName);
    let lastName = $('#lastNameIn').val();
    console.log(lastName);
    let idNumber = $('#idIn').val();
    console.log(idNumber);
    let title = $('#titleIn').val();
    console.log(title);
    let annualSalary = $('#salaryIn').val();
    console.log(annualSalary);
}