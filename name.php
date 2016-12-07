<!DOCTYPE html>
<html>
<body>

<link rel=stylesheet type="text/css" href="app.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="app.js"></script>
<body bgcolor="lightblue">
<br>

</body>

<?php
session_start();

$dbhost = 'localhost';
$dbuser = 'wp2016_groupE';
$dbpass = 'lovedivine';
$dbname = 'wp2016_groupE';

// Create connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
<<<<<<< HEAD
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  
    print("hi");
    // prepare and bind
    $stmt = $conn->prepare("MyGuests(firstname, lastname, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstname, $lastname, $email);

    $sql = "MyGuests(firstname,lastname,email)VALUE('John','Doe','john@example.com')";   

    if($conn -> query($sql) == TRUE)
    {
      echo "GOGO";
    }

    $stmt->close();
    $conn->close();
    }
    else
    {
      echo "fail";
    }
    ?>
=======
if ($conn->connect_error) 
{
  die("Connection failed: " . $conn->connect_error);
  echo "111";
}
else{
  $conn -> query("INSERT INTO MyGuests(firstname,lastname)VALUE(name,name)");
  $conn->close();
}
?>
</html>
>>>>>>> fad33a4f9b1ad45f27c2d6e7aba8851d139c7007
