$(document).ready(function() {
    $("table#science").DataTable( {
        "ajax": "/datasets/grades-ge/science.JSON",
        columns: [
          { "data": "Subject" },
          { "data": "CatalogNo" },
          { "data": "Name" },
          { "data": "MedianA" }
        ],
        "order": [[3, "asc"]],
        "scrollY":        "250px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );
