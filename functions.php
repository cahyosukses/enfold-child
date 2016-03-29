<?php

/*
* Add your own functions here. You can also copy some of the theme functions into this file. 
* Wordpress will use those functions instead of the original functions then.
*/

//  Add Custom Js lib
function enfoldchild_scripts(){
	$child_theme_url = get_stylesheet_directory_uri();
	//wp_enqueue_script( 'custom_lightbox_me', $child_theme_url.'/js/jquery.lightbox_me.js', array('jquery'), 3, true );
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

