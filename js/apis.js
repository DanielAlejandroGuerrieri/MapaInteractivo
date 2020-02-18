var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas 
donde se va a centrar el mapa */
var posicionCentral = { lat: -29.7865805, lng: -63.9438368 };
/* @-29.7865805,-63.9438368,17z - Valor de coordenadas de la iglesia de San Francisco del 
Chañar, Provincia de Cordoba - Con Zoom de muesta de 15*/

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa() {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
    mapa = new google.maps.Map(document.getElementById('map'), { //Guia 1 paso 2- creacion de mapa 
        center: posicionCentral, // Centrado con valor de posicionCentral
        zoom: 15
    });

    geocodificadorModulo.inicializar()
    marcadorModulo.inicializar()
    direccionesModulo.inicializar()
    lugaresModulo.inicializar()
    streetViewModulo.inicializar()
}