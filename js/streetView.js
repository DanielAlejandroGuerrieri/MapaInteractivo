streetViewModulo = (function() {
    var paronama // 'Visor' de StreetView
    var miPosicion

    function inicializar() {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */

        if (marcadorModulo.existeMiMarcador()) {
            miPosicion = marcadorModulo.damePosision();
        } else {
            miPosicion = posicionCentral;
        }
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
                position: miPosicion,
                pov: {
                    heading: 70, // ajuste del angulo de orientacion 0 para norte, 90 para este
                    pitch: -3, // Angulo referido al horizonte, vista hacia arriba es con valores positivos, y hacia abajo son los valores negativos
                    zoom: 0
                }
            });
        panorama.addListener("position_changed ", function() {
            mapa.setCenter(panorama.getPosition());
            console.log(mapa.setCenter(panorama.getPosition()));
        });
        mapa.setStreetView(panorama); // se le asigna la visualizacion de StreetView en el mapa general



    }

    // Actualiza la ubicación del Panorama
    function fijarStreetView(ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
        panorama.setPosition(ubicacion);
        mapa.setStreetView(panorama);
    }

    return {
        inicializar,
        fijarStreetView
    }
})()