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

<div class="wrap patellinis-contact-us-admin">

	<h1><?php esc_attr_e( 'Contact Us', $this->plugin_name ); ?></h1>
    <p>Add and edit contact information below. This information will be displayed within the site footer, and the 'Location and Hours' page (assuming a page of that name exisits).</p>
    <br />

    <h2>Locations</h2>
    <fieldset class="locations">
        <div class="oneRow">
            <label>Address Line 1:</label>
            <input type="text" value="This is what text looks like here…" class="regular-text" />
        </div>
        <div>
            <label>Address Line 2:</label>
            <input type="text" value="This is what text looks like here…" class="regular-text" />
        </div>
        <div class="twoRow">
            <div>
                <label>City:</label>
                <input type="text" value="This is what text looks like here…" class="regular-text" /><br />
            </div>
            <div class="big">
                <label>State:</label>
                <input type="text" value="This is what text looks like here…" class="regular-text" /><br />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value="This is what text looks like here…" class="regular-text" /><br />
            </div>
        </div>
    </fieldset>


    <h2>Hours</h2>
    <fieldset class="hours">
        <textarea id="" name="" rows="5" class="large-text">.large-text</textarea><br>
    </fieldset>

  
		
    
</div> <!-- .wrap -->