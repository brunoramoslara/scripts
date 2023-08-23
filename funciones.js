// Ocultar contenido durante un intérvalo de tiempo
function shortcode_oculto_func( $atts, $content = null ) {
    ob_start(); // Iniciar el almacenamiento en búfer de salida
    ?>
    <p id="oculto" style="display: none;"><?php echo do_shortcode( $content ); ?></p>
    <script>
        setTimeout(function() {
            document.getElementById('oculto').style.display = 'block';
        }, 10000); // Mostrar después de 10 segundos
    </script>
    <?php
    return ob_get_clean(); // Obtener y limpiar el contenido del búfer
}
add_shortcode( 'oculto', 'shortcode_oculto_func' );


// Shortcode para añadir el año actual
function shortcode_anio_actual() {
    return date('Y');
}
add_shortcode('año', 'shortcode_anio_actual');

// Shortcode para añadir la fecha
function shortcode_fecha_completa() {
    return date('d/m/Y');
}
add_shortcode('fecha_completa', 'shortcode_fecha_completa');

// Shortcode para añadir la fecha actualizada diariamente
function shortcode_fecha_completa_actualizada() {
    ob_start();
    ?>
    <span id="fecha-completa-actualizada"></span>
    <script>
        function actualizarFecha() {
            var fechaActual = new Date();
            var dia = fechaActual.getDate();
            var mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
            var anio = fechaActual.getFullYear();

            var fechaFormateada = dia + '/' + mes + '/' + anio;
            document.getElementById('fecha-completa-actualizada').textContent = fechaFormateada;
        }

        // Actualizar la fecha al cargar la página y luego cada 24 horas
        actualizarFecha();
        setInterval(actualizarFecha, 24 * 60 * 60 * 1000); // Cada 24 horas (en milisegundos)
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('fecha_completa_actualizada', 'shortcode_fecha_completa_actualizada');
