function sortTable(columnIndex) {
  var table = document.querySelector(".incident-list tbody");
  var rows = Array.from(table.rows);

  rows.sort(function (a, b) {
    var cellA = a.cells[columnIndex].innerText.toLowerCase();
    var cellB = b.cells[columnIndex].innerText.toLowerCase();
    return cellA.localeCompare(cellB);
  });

  rows.forEach(function (row) {
    table.appendChild(row);
  });
}

// Get the modal element
var modal = document.getElementById("incidentModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal and populate it with incident details
function openModal(incidentId, type, priority, location, status) {
  // Update modal content dynamically
  document.querySelector(
    "#incidentModal .modal-content p:nth-child(2)"
  ).innerText = `ID: ${incidentId}`;
  document.querySelector(
    "#incidentModal .modal-content p:nth-child(3)"
  ).innerText = `Type: ${type}`;
  document.querySelector(
    "#incidentModal .modal-content p:nth-child(4)"
  ).innerText = `Priority: ${priority}`;
  document.querySelector(
    "#incidentModal .modal-content p:nth-child(5)"
  ).innerText = `Location: ${location}`;
  document.querySelector(
    "#incidentModal .modal-content p:nth-child(6)"
  ).innerText = `Status: ${status}`;

  // Display the modal
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
