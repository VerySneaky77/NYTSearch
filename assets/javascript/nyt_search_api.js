$(document).ready(function () {

    var queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q" +
    parameterToSearch + "&page=2&sort=oldest&api-key=b9b6dd9-652a-46bd-b589-b9ac1d373c83";

    $("#search-submit").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        $.ajax({
            url: queryURl,
            method: "GET"
        }).then(function(response){
            console.log(response);
        });

        
        
    console.log("dodododo")
      });
})