$(document).ready(function() {
   			$("#container div a").click(function() {
        	$(this).animate({
           		width: '+=10px'
        		}, 500);
 			$(this).prev().html(parseInt($(this).prev().html()) + 1);
var sum = 0;
  $('#container div').each(function(){
      sum+=parseInt($('span', this).text());
  });
  $('#result').html(sum);
        	return false;
    		});
		}); //Голосование 
$(document).ready(function() {
        $("#like").click(function() {
      $(this).html(parseInt($(this).html()) + 1);
var sum = 0;
          return false;
        });
    });// like
      $(document).on("click", "#add", function () {
        var comment = $("#area").val ();
        $("<p>" + comment + "</p>").appendTo("#comments")
        return false;
      });//Кнопка
$(document).ready(function() {

  $('textarea').keydown(function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
var comment = $("#area").val ();
       $("<p>" + comment + "</p>").appendTo("#comments")
    }
  });
});//ctrl+entr
