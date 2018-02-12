$(document).ready(function() {

  var query = "hello";
  $("#subButton").click(function(){
    var query = $("#inputText").val();
    var before = "https://api.giphy.com/v1/gifs/search?api_key=9TaMxpyk5OYXTI03dzb0KmQAl1OssEZ5&q="
    var after = "&limit=25&offset=0&rating=G&lang=en"
    var request = before + query + after;

    $.ajax({url: request, success: function(result){

        console.log(result.data[0].images.downsized_medium.url);
    }});

  })

});
