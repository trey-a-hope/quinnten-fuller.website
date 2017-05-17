<?php
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	/* Get passed parameters. */
	$to = $_POST['to'];
    $subject = $_POST['subject'];
	$body = $_POST['body'];

	/* Send email. */
	$result = @mail($to, $subject, $body);

    if($result){
		print json_encode($result);
	}else{
		die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}   
?>