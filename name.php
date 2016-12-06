<!DOCTYPE html>
<html>
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
    $conn -> query("INSERT INTO MyGuests(firstname,lastname)VALUE('".$_POST['name']."','".$_POST['name1']."')");
    $conn->close();
    }
    ?>
</html>
