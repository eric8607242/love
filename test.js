$(document).ready(function(){
    $('form').submit(function(){
        saveData();
        }
        });

    function saveData(){
    if($('#name').va()==''||$('name1').va()=='')
    {
    alert('fuck you\n');
<<<<<<< HEAD
  }
  else
  {
    var na =  $('#name').val(); 
    var nam= $('#name1').val();

    $.ajax({
      url:"name.php";
      type:"POST";
      data:{na:nam},
      success:function(data)
      {
        console.log("你們沒機會");
      }
    });
  }
=======
    }
    else
    {
    var name =  $('#name').val(); 
    var name1 = $('#name1').val();

    $.ajax({
url:"name.json";
type:"POST";
data:{name:name1},
success:function(data)
{
console.log("你們沒機會");
}
});
}
>>>>>>> 5bef133588368d1e350712224c67107f36ab6b86
}

