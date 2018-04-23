// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Color');
    data.addColumn('number', 'Votes');
    data.addRows([
        ['Orange', 1],
        ['Green', 2],
        ['Yellow', 1],
    ]);

    // Set chart options
    var options = {
        /* 'title': 'Voting results',
         'width': 300,
        'height': 300, */ 
        'legend': 'none'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart1_div'));
    chart.draw(data, options);
}