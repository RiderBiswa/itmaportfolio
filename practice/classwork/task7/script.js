function addRow() {
    // Get the table body element
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    // Insert a new row at the end of the table
    var newRow = table.insertRow();

    // Insert cells into the new row
    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1); 
    var cityCell = newRow.insertCell(2);

    // Add text to the new cells
    nameCell.innerHTML = prompt("Enter Name:");
    ageCell.innerHTML = prompt("Enter Age:");
    cityCell.innerHTML = prompt("Enter City:");
}
