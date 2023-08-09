const contraste = document.getElementById('contraste');
const body = document.body;

contraste.addEventListener('click', () => {
  if (body.classList.contains('contraste')) {
    body.classList.remove('contraste');
  } else {
    body.classList.add('contraste');
  }
});

$( function() {
    $( "#seccion3" ).accordion();
  } );