function formatCell(c) {
	switch (c.column) {
		case "Current 538 margin (P)":
			return c.value > 0 ? "color: blue" : "color: red";
			break;
		default:
			return "color: black";
	}
} 

function initTable(data) {
	var table = d3.select("#table").append('table')
								.attr("cellpadding", 0)
								.attr("cellspacing", 0);
	var thead = table.append('thead');
	var tbody = table.append('tbody');

	var columns = ["State", "UC", "Current 538 margin (P)", "Percentage of vote each person contributes"];
	var displayColumns = ["State", "UC Students from this State", "538 Margin (%)", "Impact of 1 Vote (%)"]

	thead.append('tr')
		.selectAll('th')
		.data(displayColumns).enter()
		.append('th')	
			.text(function(column) { return column; })

	var rows = tbody.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");

  var cells = rows.selectAll("td")
  	.data(function(row) {
  		return columns.map(function(column) {
        return {column: column, value: row[column]};
      });
  	})
    .enter()
    .append("td")
    .attr("style", function(d) { return formatCell(d); })
    .html(function(d) { return d.value; });
}