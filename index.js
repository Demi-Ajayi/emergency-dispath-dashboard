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
