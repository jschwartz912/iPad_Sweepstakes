<?php
	// Establish database connection
	$connection = mysqli_connect("localhost", "root", "VeiOJgIKXSaHLKc1", "boasweepdba"); // Establishing Connection with Server..
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	//Fetching Values from URL
	$fname=$_POST['firstname'];
	$lname=$_POST['lastname'];
	$email=$_POST['email'];
	$address=$_POST['address'];
	$city=$_POST['city'];
	$state=$_POST['state'];
	$zip=$_POST['zip'];
	$phone=$_POST['phone'];
	//Insert query
	$sql = "INSERT INTO entries(firstname, lastname, email, address, city, state, zip, phone) values ('$fname', '$lname', '$email','$address', '$city', '$state', '$zip', '$phone')";

	if (mysqli_query($connection, $sql)) {
		echo "Form Submitted Succesfully";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($connection);
	}
	mysqli_close($connection); // Connection Closed
?>