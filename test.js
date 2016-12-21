$(document).ready(function(){
    $('button').click(function(){
        console.log('hi');
        saveData();
    });

  function saveData(){
    $.get('database.njs',function(data){
      console.log(data);
    });
  }
});
