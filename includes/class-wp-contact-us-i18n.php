<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       www.testerson.com
 * @since      1.0.0
 *
 * @package    Wp_Contact_Us
 * @subpackage Wp_Contact_Us/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Wp_Contact_Us
 * @subpackage Wp_Contact_Us/includes
 * @author     Testy McTesterson <testerson@gmail.com>
 */
class Wp_Contact_Us_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-contact-us',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
