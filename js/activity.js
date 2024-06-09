
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

      if (content != "Not Available") {
        $(this).toggleClass("tdhightlight");

        if ($(this).hasClass("tdhighlight")) {
            $('#displaySelected').css("visibility", "visible"); 
            $('#displaySelected').css("margin-top", "2em"); 
            $('#result').append("<p>"+content+ "</P>"); 

        } else { //if selected cell don't have class
          $('#result p:contains('+content+')').remove();;

          if ($('#result').has('p').length == false) {
              $('#displaySelected').css("visibility", "hidden");
              $('#displaySelected').css("margin-top", "0");
          
          }
        }
      }
      

    });
 });