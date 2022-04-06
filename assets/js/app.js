

/* Tooltips JQuery */
/* var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) */


/* Eventos Onclick BTN Correo */
/* $(function(){
   $("#enviarCorreo").click(function(event){
     alert("El correo fue enviado correctamente");
  
 });
}); */

/* Cambio de color textos */

/* $(document).ready(function(){
  $(".titulos").dblclick(function(){
    $(this).css({
      "color": "red"
    });   
  }); */
 
/*   $('.titulos').bind('mouseout', function(){
    $(this).css({
      "color": "#373A3C"
    });
  })   */
/* }); */


/* toggle cards */

/* $( ".card-title" ).click(function() {
  $( ".card-text" ).toggle( "slow", function() {
    
  });
}); */
 




$(function (){
  $('[data-bs-toggle="tooltip"]').tooltip();

  $("#enviarCorreo").click(function (){
    alert("El correo fue enviado correctamente");
  });

  $("body").on("dblclick", "h3", function (){
    $(this).css("color", "red");
  });

  $(".card-title").click(function (){
    $('.card-text').toggle();
  });

  /* $('p').click(function (){
    $(this).css("background-color", "green");
  }) */
});

