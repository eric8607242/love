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
    $.ajax({
      url:"name.json";
      type:"POST";
      data:{'#name':'#name1'},
      success:function(data)
      {
        console.log("你們沒機會");
      }
    });
  }
}


