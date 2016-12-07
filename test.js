/*$(document).ready(function()
    {
    $('form').submit(function()
        {
        saveData();
        }
        }));

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
<<<<<<< HEAD
      url:"./name.php";
      type:"POST";
      data:{"firstname":na},
      error:function(){
        alert("wrong");
      },
      success:function(data)
      {
        console.log("你們沒機會");
      }
    });
  }
=======
url:"./name.php";
type:"POST";
data:{"firstname":na},
error:function(){
alert("wrong");
},
success:function(data)
{
console.log("你們沒機會");
}
});
>>>>>>> fad33a4f9b1ad45f27c2d6e7aba8851d139c7007
}
}
*/
$(document).ready(function () {
    alert('HI');
    $('#send').click(function () {
        if ($('#name').is(':empty')){
        $('.ItemName').addClass('has-error');
        }
        else {
        $('.ItemName').removeClass('has-error');
        }
        });
    });
