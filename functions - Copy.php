<?php
session_start();
/*
* Add your own functions here. You can also copy some of the theme functions into this file. 
* Wordpress will use those functions instead of the original functions then.
*/

//  Add Custom Js lib
function enfoldchild_scripts(){
	$child_theme_url = get_stylesheet_directory_uri();
	wp_enqueue_script( 'custom_lightbox_me', $child_theme_url.'/js/jquery.lightbox_me.js', array('jquery'), 3, true );
	wp_enqueue_script( 'custom', $child_theme_url.'/js/custom.js', array('jquery'), 3, true );
}

add_action('wp_enqueue_scripts', 'enfoldchild_scripts');

// Remove prices everywhere
 
add_filter( 'woocommerce_variable_sale_price_html', 'businessbloomer_remove_prices', 10, 2 );
add_filter( 'woocommerce_variable_price_html', 'businessbloomer_remove_prices', 10, 2 );
add_filter( 'woocommerce_get_price_html', 'businessbloomer_remove_prices', 10, 2 );
 
function businessbloomer_remove_prices( $price, $product ) {
$price = '';
return $price;
}

add_filter('gettext', 'wpse_124400_woomessages', 10, 3);

/**
* change some WooCommerce labels
* @param string $translation
* @param string $text
* @param string $domain
* @return string
*/
function wpse_124400_woomessages($translation, $text, $domain) {
if ($domain == 'woocommerce') {
if ($text == 'Cart updated.') {
$translation = 'Basket updated.';
}
}

return $translation;
} 

/*
Wp Auto login and redirecting : http://codecanyon.net/forums/thread/wordpress-automatically-login-a-user-based-on-referring-url/107902
*/


if($_GET['action']=="logout"){
	unset($_SESSION['user_login_id']);
}


/**
 * Perform automatic login.
 */
function wpdocs_custom_login() {
	$password = "zaSw&EHYxBlgQlczTra5X9KV%^&*1";
    $creds = array(
        'user_login'    => $_SESSION['user_login_id'],
        'user_password' => $password,
        'rememember'    => true
    );
 
    $user = wp_signon( $creds, false );
 
    if ( is_wp_error( $user ) ) {
       // echo $user->get_error_message();
    }
}
 
// Run before the headers and cookies are sent.
add_action( 'after_setup_theme', 'wpdocs_custom_login' );

