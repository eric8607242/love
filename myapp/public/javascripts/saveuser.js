/*$(document).ready(function(){
  $('#btn').click(function(){
  console.log('hi');
  saveData();
  });

  function saveData(){
  $.get('database.njs',function(data){
  console.log('eric');
  });
  }
  });
 */
$(document).ready(function(){
    $('#btn').click(function(){
        console.log("gogogo")
        event.preventDefault();
        $.ajax({
type: "post",
url: "/test/saveData",
datatype: "JSON",
success: function(res){
console.log(res);
}
})
})
});

        /*$("#btn").click(function(event) {
          console.log("gogogo")
          event.preventDefault();
          $.ajax({
type: "post",
url: "saveData",
datatype: "JSON",
success: function(res){
console.log(res);
}
})
});*/
