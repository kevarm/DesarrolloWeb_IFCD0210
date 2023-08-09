$(document).ready(function(){





/**BOTÓN 1 */

$("#uno").on( "click", function() {

    $( ".cont1" ).toggleClass( "newClass1", 1000 );

  });

/**BOTÓN 2 */

$("#dos").on( "click", function() {

    $( ".cont2" ).effect("explode", 1000 );

  });

/**BOTÓN 3 */

$("#tres").on( "click", function() {

    $( ".cont3" ).effect("fade", 1000 );

  });

/**BOTÓN 4 */

$("#cuatro").on( "click", function() {

    $( ".cont4" ).effect("drop", 1000 );

  });

/**BOTÓN 5 */

$("#cinco").on( "click", function() {

    $( ".cont5" ).effect("fold", 1000 );

  });

/**BOTÓN 6 */

$("#seis").on( "click", function() {

    $( ".cont6" ).effect("puff", 1000 );

  });

/**BOTÓN 7 */

$("#siete").on( "click", function() {

    $( ".cont7" ).effect("pulsate", 1000 );

  });

/**BOTÓN 8 */

$("#ocho").on( "click", function() {

    $( ".cont8" ).effect("slide", 1000 );

  });

/**BOTÓN 9 */

$("#nueve").on( "click", function() {

    $( ".cont9" ).effect("shake", 1000 );

  });

/**BOTÓN 10 */

$("#diez").on( "click", function() {

    $( ".cont10" ).effect("bounce", 1000 );

  });

/**BOTÓN 11 */

$("#once").on( "click", function() {

    $( ".cont11" ).effect("highlight", 1000 );

  });

/**BOTÓN 12 */

$("#doce").on("click", function() {
    $( ".cont12" ).datepicker();
  } );




});