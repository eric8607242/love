<?php
$dbhost = 'localhost';
$dbuser = 'wp2016_groupE';
$dbpass = 'lovedivine';
$dbname = 'wp2016_groupE';

// Create connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  
    print("hi");
    // prepare and bind
    $stmt = $conn->prepare("INSERT INTO MyGuests(firstname, lastname, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstname, $lastname, $email);

    $sql = "INSERT INTO MyGuests(firstname,lastname,email)VALUE('John','Doe','john@example.com')";   

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
