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