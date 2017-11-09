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

<?php 

$states = array(
    'AL'=>'AL',
    'AK'=>'AK',
    'AS'=>'AS',
    'AZ'=>'AZ',
    'AR'=>'AR',
    'CA'=>'CA',
    'CO'=>'CO',
    'CT'=>'CT',
    'DE'=>'DE',
    'DC'=>'DC',
    'FM'=>'FM',
    'FL'=>'FL',
    'GA'=>'GA',
    'GU'=>'GU',
    'HI'=>'HI',
    'ID'=>'ID',
    'IL'=>'IL',
    'IN'=>'IN',
    'IA'=>'IA',
    'KS'=>'KS',
    'KY'=>'KY',
    'LA'=>'LA',
    'ME'=>'ME',
    'MH'=>'MH',
    'MD'=>'MD',
    'MA'=>'MA',
    'MI'=>'MI',
    'MN'=>'MN',
    'MS'=>'MS',
    'MO'=>'MO',
    'MT'=>'MT',
    'NE'=>'NE',
    'NV'=>'NV',
    'NH'=>'NH',
    'NJ'=>'NJ',
    'NM'=>'NM',
    'NY'=>'NY',
    'NC'=>'NC',
    'ND'=>'ND',
    'MP'=>'MP',
    'OH'=>'OH',
    'OK'=>'OK',
    'OR'=>'OR',
    'PW'=>'PW',
    'PA'=>'PA',
    'PR'=>'PR',
    'RI'=>'RI',
    'SC'=>'SC',
    'SD'=>'SD',
    'TN'=>'TN',
    'TX'=>'TX',
    'UT'=>'UT',
    'VT'=>'VT',
    'VI'=>'VI',
    'VA'=>'VA',
    'WA'=>'WA',
    'WV'=>'WV',
    'WI'=>'WI',
    'WY'=>'WY',
    'AE'=>'AE',
    'AA'=>'AA',
    'AP'=>'AP'
);

?>

<form method="POST" name="contact-us-inputs" action="./admin.php?page=wp-contact-us">
    <div class="wrap patellinis-contact-us-admin">

        <h1><?php esc_attr_e( 'Contact Us', $this->plugin_name ); ?></h1>
        <p>Add and edit contact information below. This information will be displayed within the site footer, and the 'Location and Hours' page (assuming a page of that name exisits).</p>
        <br />
        <h2>Locations</h2>
        <div class="locations">
            <div class="oneRow">
                <label>Address Line 1:</label>
                <input type="text" value="" />
            </div>
            <div class="oneRow">
                <label>Address Line 2:</label>
                <input type="text" value=""  />
            </div>
            <div class="twoRow">
                <div>
                    <label>City:</label>
                    <input type="text" value=""  /><br />
                </div>
                <div>
                    <label>State:</label>
                    <select>
                        <?php 
                            foreach ($states as $state) {
                                echo '<option value="'. $state .'">'. $state .'</option>';
                            }
                        ?>
                    </select><br />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" value=""  /><br />
                </div>
            </div>
    </div>


        <h2>Hours</h2>
        <p>Hours will be centered when displayed on website.</p>
        <fieldset class="hours">
            <textarea id="" name="" rows="5" class="large-text"></textarea><br>
        </fieldset>

    <?php
        submit_button( 'Save Contact Information', 'primary', 'submit', true, null );
    ?>
    
            
        
    </div> <!-- .wrap -->
</form>