// from data.js
// Get a reference to the table body
var tbody = d3.select("tbody");

var tableData = data;

// YOUR CODE HERE!

// Grab UFO info from data and populate into the table in HTML
data.forEach(function(UFO) {
    // console.log(UFO);
    var row = tbody.append("tr");
  
    Object.entries(UFO).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
});


// Select the form
var form = d3.select("#form");
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key

form.on("submit",runEnter);
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  var filteredData = data.filter(UFO => UFO.datetime === inputValue);
  console.log(filteredData);
  var trow = d3.selectAll("tbody>tr");
  var row =trow.remove();

  filteredData.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
  
    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
});

    



  
}