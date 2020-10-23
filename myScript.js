function myFunction() {
    var get = document.getElementById("myTableBody");
    var fname = document.getElementById("name1").value;
    var lname = document.getElementById("surname").value;
    var number = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;
    var del = '<a href="#" id="delcontact" onclick="myDelete(this)">Delete Contact</a>';
    var newRow = get.insertRow(0);
    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    cell5.className = "deleteButton";
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = number;
    cell4.innerHTML = address;
    cell5.innerHTML = del;
}

function myDelete(x) {
    var z = x.parentNode.parentNode.rowIndex;
    document.getElementById("myTableBody").deleteRow(z);
}
$(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });