<!DOCTYPE html>
<html>
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
$dbhost = 'localhost';
$dbuser = 'wp2016_groupE';
$dbpass = 'lovedivine';
$dbname = 'wp2016_groupE';

// Create connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if ($conn->connect_error) 
{
  die("Connection failed: " . $conn->connect_error);
  echo "111";
}
else{
  // prepare and bind
  $conn -> query("INSERT INTO MyGuests(firstname,lastname)VALUE(name,name)");
  $conn->close();
}
?>
</html>
