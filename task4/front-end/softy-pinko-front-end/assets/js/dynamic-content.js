// Load dynamic data from the back-end on port 5252
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:5252/api/hello",
        success: function(data) {
            console.log(data);
            $('#dynamic-content').text(data);
        },
        error: function(error) {
            console.log("Error loading data:", error);
            $('#dynamic-content').text("Hello, World!");
        }
    });
});
