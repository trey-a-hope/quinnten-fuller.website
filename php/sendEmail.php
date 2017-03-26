<?php
	/* Sends message to my personal email. */
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	$firstname = $_POST['firstName'];
    $lastname = $_POST['lastName'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = "trey.a.hope@gmail.com";
	$subject = "Message from ".$firstname." ".$lastname." at ".$email; 

	$result = @mail($to, $subject, $message);
    if($result){
		print json_encode($result);
	}else{
		 die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}   
?>