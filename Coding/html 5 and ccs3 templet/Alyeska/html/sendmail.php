<?php
/*

==========================================
== PHP Contact Script - by Jason Bobich ==
==========================================

*/

//Check to make sure a spam bot didn't submit the form
if($_POST['checking']) {
	die("You dipped your hand in the honeypot!");
}



// ---------------------------------------------------------
// BEGIN EDITING
// ---------------------------------------------------------

$to = "you@youremail.com"; //This is the email address messages will be sent to
$blog_name = "Your Website"; //This is the name of your website that will show in your email inbox

// ---------------------------------------------------------
// END EDITING
// ---------------------------------------------------------




//Visible form elements
$name = $_POST['name']; //Sender's name
$email = $_POST['email']; //Sender's email
$message_text = $_POST['message']; //Sender's message

//Add fields added through theme options page to Email
$custom = '';
foreach ($user_fields as $key => $field) {
	
	if($field['value']) {
	
		$custom.= $field['name'] . ": " . $field['value'] ."<br /> \n";
	
	}
	
}

//Declare which field naems we're already using.
$currently_active = array(	'name',
							'email',
							'message',
							'myemail',
							'mysitename',
							'submitted'
							);

//If you add any fields manually to tempate_contact.php, this will grab them and send them in the email.
$extras = '';
foreach ($_POST as $key => $field) {

	if(!in_array($key,$currently_active)) {
		$extras.= $key . ": " . $field . "<br /> \n";
	}

}

//Setting up email
$subject = "New Message from $blog_name";

$message = "New message from  $name <br/>
			Mail: $email<br />
			$custom
			$extras
			Message: $message_text";

$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$header .= 'From:'. $email . " \r\n";
			
$sent = mail($to, $subject, $message, $header);

//For debugging
if($sent) {
	echo "mail sent";
} else {
	echo "error";
}

?>