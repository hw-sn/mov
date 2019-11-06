$(document).ready(function(){
  // Responsive sidebar
  $( "#toggle_sidebar" ).on( "click", function() {
    $( ".secondary" ).show().css("width", "66%");
    $( "#page_overlay" ).show();
  });
  $( "#page_overlay" ).on( "click", function() {
    $( ".secondary" ).hide();
    $( "#page_overlay" ).hide();
  });
});
