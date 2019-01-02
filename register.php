<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', '');
   define('DB_DATABASE', 'database');
   $db = mysqli_connect('localhost','root',"",'test');
 ?>
<?php
if(isset($_POST) & !empty($_POST)){
	@$username = ($_POST['username']);
	@$email = ($_POST['email']);
	@$password = ($_POST['password']);
	$sql = "INSERT INTO login (username,email,password) VALUES ('$username','$email','$password')";
	$result = mysqli_query($db,$sql);
	if($result)
	{
                header("location:user1.html");
	}
	else{
		echo "<h1><br><br><br><br><br><center>USER REGISTRATION FAILED...Details given already exists!</h1></center>";	
}
	
}

?>
