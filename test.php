<!DOCTYPE html>
<html>  
<body>

<link rel=stylesheet type="text/css" href="test.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="test.js"></script>
<script src="app.js"></script>

<font face="cursive" size="10" color="black">
<div id="you">你</div>
<div id="he">他</div>
</font>


<font face="cursive" size="4" color="black">
<form method="post" role="form" class="fo">
<div class="lover">
你的名字:<input type = "text" id="name" name = "name" placeholder="ex.牛郎">
<br><br><br>
你的生日:<input type = "text" id="bir" placeholder="ex.0000/00/00">
<br><br><br>
你的信箱:<input type = "text" id="email" placeholder="ex123456@gmail.com">
<br><br><br>
</div>

<div class="beloved">
他的名字:<input type = "text" id="name1" name = "name1" placeholder="ex.織女">
<br><br><br>
他的生日:<input type = "text" id="bir1" placeholder="ex.0000/00/00">
<br><br><br>
</div>
<button onclick="move()" type = "submit" class="btn_test" id="send">開始測驗!!</button><br><br>
</form>
<?php
session_start();

$dbhost = 'localhost';
$dbuser = 'wp2016_groupE';
$dbpass = 'lovedivine';
$dbname = 'wp2016_groupE';
// Create connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
// Check connection
if ($conn->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
else echo "connect";

$stmt = $conn->prepare("MyGuests(firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);
$sql = "MyGuests(firstname,lastname,email)VALUE('John','Doe','john@example.com')";

$stmt->close();
$conn->close();
?>

</font>
<div id="progress">
<div id="bar">
<div id="label">0%</div>
</div>
</div>
<br>



</body>
</html>