$(document).ready(readyNow);

function readyNow() { 
    appendDom();  
}

function appendDom() {
    let table = $('<table></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>Id Number</th><th>Employee Title</th><th>Annual Salary</th></thead>');
  
    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);
  
    $('.container').append(table);

    $('#submit-btn').on('click', submitInfo)

    function submitInfo() {
        //colect info from inputs
        let firstName = $('#firstNameIn').val();
        let lastName = $('#lastNameIn').val();
        let idNumber = $('#idIn').val();
        let title = $('#titleIn').val();
        let annualSalary = $('#salaryIn').val();
    
        tbody.append('tr><td>' + firstName + '</td><td>' + lastName +'</td><td>' + idNumber + '</td><td>' + title + '</td><td>' + annualSalary + '</td>');
    
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#salaryIn').val('');
    }
}