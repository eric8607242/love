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
}


