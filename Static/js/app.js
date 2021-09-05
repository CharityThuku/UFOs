// import the data from data.js
const tableData = Data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    // Loop each object in the data 
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
            // Loop through each field in dataRow and add each value as a table cells (td)
            Object.values(dataRow).forEach((val) => {
                let cell = row.append("td");
                    cell.text(val);  
             });
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
        // Check to see if a date was entered and filter the data using that date
        if (date) {
            // Apply 'filter' to the table data to only keep the 
            // rows where the 'datetime' value matches the filter value
            filteredData = filteredData.filter(row => row.datetime === date);
        };
    // Rebuild the table using the filtered data. 
    // NOTE: If no date was entered, the tables will be identical. 
    buildTable(filteredData);
    // Attach an event to listen for the form button.
    d3.selectAll("#filter-btn").on("click", handleClick);

    // Builtd the table when the page loads.
    buildTable(tableData);
};