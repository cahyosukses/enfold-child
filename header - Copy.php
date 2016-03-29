<?php
session_start();
	global $avia_config;

	$style 		= $avia_config['box_class'];
	$responsive	= avia_get_option('responsive_active') != "disabled" ? "responsive" : "fixed_layout";
	$blank 		= isset($avia_config['template']) ? $avia_config['template'] : "";	
	$av_lightbox= avia_get_option('lightbox_active') != "disabled" ? 'av-default-lightbox' : 'av-custom-lightbox';
	$preloader	= avia_get_option('preloader') == "preloader" ? 'av-preloader-active av-preloader-enabled' : 'av-preloader-disabled';
	$sidebar_styling = avia_get_option('sidebar_styling');


	
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="<?php echo " html_{$style} ".$responsive." ".$preloader." ".$av_lightbox." ".avia_header_class_string();?> ">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />

<!-- page title, displayed in your browser bar -->
<title><?php if(function_exists('avia_set_title_tag')) { echo avia_set_title_tag(); } ?></title>

<?php
/*
 * outputs a rel=follow or nofollow tag to circumvent google duplicate content for archives
 * located in framework/php/function-set-avia-frontend.php
 */
 if (function_exists('avia_set_follow')) { echo avia_set_follow(); }


 /*
 * outputs a favicon if defined
 */
 if (function_exists('avia_favicon'))    { echo avia_favicon(avia_get_option('favicon')); }
?>


<!-- mobile setting -->
<?php

if( strpos($responsive, 'responsive') !== false ) echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';
?>


<!-- Scripts/CSS and wp_head hook -->
<?php
/* Always have wp_head() just before the closing </head>
 * tag of your theme, or you will break many plugins, which
 * generally use this hook to add elements to <head> such
 * as styles, scripts, and meta tags.
 */

wp_head();

?>

</head>




<body id="top" <?php body_class($style." ".$avia_config['font_stack']." ".$blank." ".$sidebar_styling); avia_markup_helper(array('context' => 'body')); ?>>

	<?php 
		
	if("av-preloader-active av-preloader-enabled" === $preloader)
	{
		echo avia_preload_screen(); 
	}
		
	?>

	<div id='wrap_all'>
    
    <?php
	/*
	* Search reference Code on tbl: one_usermeta for user_login
	*/
	global $wpdb;
	if(!empty($_POST["avia_2_1"])){
		$results = $wpdb->get_results("Select * from one_usermeta where meta_value='".$_POST["avia_2_1"]."'");
	}
	
	if(!empty($results)){
		$results_users = $wpdb->get_results("Select * from one_users where ID='".$results[0]->user_id."'");
		
		/*
		* Search user id and post type on tbl: one_posts for membership id
		*/
		$membership_search = $wpdb->get_results("Select * from one_posts where post_author='".$results[0]->user_id."' and post_type='wc_user_membership'");
		if(!empty($results_users)){
			/*
			* User login id set to session for auto login using wp_signon() in function.php
			*/
			$_SESSION['user_login_id'] = $results_users[0]->user_login;
		}
		
		/*
		* get membership id id 853 = rugged, 854 = precision. Then Redirecting to specific landing page.
		*/
		
		if(!empty($membership_search)){
			if($membership_search[0]->post_parent=="853"){
				$redirect_url = get_site_url() . "/rugged/";
				?>
                <script type="application/javascript">document.location.href='<?=$redirect_url?>';</script>
                <?php
			}
			else if($membership_search[0]->post_parent=="854"){
				$redirect_url = get_site_url() . "/precision/";
				?>
                 <script type="application/javascript">document.location.href='<?=$redirect_url?>';</script>
                <?php
			}
		}
	}
	
	
	
	?>  
    
	<?php 
	if(!$blank) //blank templates dont display header nor footer
	{ 
		 //fetch the template file that holds the main menu, located in includes/helper-menu-main.php
         get_template_part( 'includes/helper', 'main-menu' );

	} ?>
		
	<div id='main' data-scroll-offset='<?php echo avia_header_setting('header_scroll_offset'); ?>'>

	<?php 
		
		if(isset($avia_config['temp_logo_container'])) echo $avia_config['temp_logo_container'];
		do_action('ava_after_main_container'); 
		
	?>
