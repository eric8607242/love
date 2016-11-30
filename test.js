$(document).ready(function(){
    $('form').submit(function(){
        saveData();
        }
        });

    function saveData(){
    if($('#name').va()==''||$('name1').va()=='')
    {
    alert('fuck you\n');
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
}
    
