<?php
$name = $_POST['name'] . PHP_EOL;
$name1= $_POST['name1'] . PHP_EOL;


$conn = new mysqli($name,$name1);

if($conn-> connect_error)
{
  die("failed".$conn->connect_error);
}
$sql = "SELECT name,name1";
$result = $conn->query($sql);


while($row = $result->mysql_fetch_array())
{
  echo:"name".$row["name"]."name1".$row["name1"].;
}
?>
