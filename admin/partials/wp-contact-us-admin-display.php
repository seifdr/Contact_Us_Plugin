<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       www.testerson.com
 * @since      1.0.0
 *
 * @package    Wp_Contact_Us
 * @subpackage Wp_Contact_Us/admin/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->

<div class="wrap">

	<h1><?php esc_attr_e( 'Contact Us', $this->plugin_name ); ?></h1>
    <p>Add and edit contact information below. This information will be displayed within the site footer, and the 'Location and Hours' page (assuming a page of that name exisits).</p>
    <br />

    <input type="text" value="This is what text looks like here…" class="regular-text" />
    <span class="description"><?php esc_attr_e( 'This is a description for a form element.', 'WpAdminStyle' ); ?></span><br> 
		

</div> <!-- .wrap -->