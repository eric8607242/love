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
    $('#send').click(function(){
        console.log("gogogo")
        event.preventDefault();

        var data = {
          name1:$("#name1").val(),
          email:$("#email").val(),
          email1:$("#email1").val(),
          bir:$("#bir1").val()
        }

        console.log(userID);
        console.log("upup");
       $.ajax({
type: "post",
url: "/test/saveData",
data:data,
datatype: "JSON",
//data: data,
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
