$(document).ready(function () {

    var queryURl;

    $("#search-submit").on("click", function (event) {

        searchTerm = $("#search-term").text();

        console.log(searchTerm);
        queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        searchTerm + "&api-key=qXG8wP8eqVtloArktou8tJ6QD1c7HrMz";

        event.preventDefault();
        $.ajax({
            url: queryURl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#results-panel").append(response.docs);
        });

        console.log("dodododo")
    });
})