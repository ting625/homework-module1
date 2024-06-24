
//Activity Cell Function

$(document).ready(function(){
   $('td#cell').click(function(){
    $(this).toggleClass('tdhighlight');
   })
 });


//User interaction with table cells

  $(document).ready(function(){
    $("td").click(function () { //user select a table data cell 
      var content = $(this).text(); //get content of cell
      console.log("content is "+ content);

      // Get index
      var index = $(this).index();
      console.log("index is " + index);

      // Get th location
      var th_location = $('th')[index];
      console.log(th_location);

      // Convert it to text
      var location = $(th_location).text();
      console.log(location);

      if (content != "Not Available") {
        $(this).toggleClass("tdhightlight");

        if ($(this).hasClass("tdhighlight")) {
            $('#displaySelected').css("visibility", "visible"); 
            $('#displaySelected').css("margin-top", "2em"); 
            $('#result').append("<p>"+content+ " at " + location + "</p>"); 

        } else { //if selected cell don't have class
          $('#result p:contains('+content+')').remove();

          if ($('#result').has('p').length == false) {
              $('#displaySelected').css("visibility", "hidden");
              $('#displaySelected').css("margin-top", "0");
          
          }
        }
      }
  });
});


$(document).ready(function(){
  $(th).css("background-color", "#bdd5ed");
  })
