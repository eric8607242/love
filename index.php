<!DOCTYPE html>
<html>
<head>
<style>
@keyframes mysnow {
  0% {  bottom: 100%; opacity: 0; }
  25%{  bottom:50%;   opacity:1; }
  50% { bottom:30%;   opacity:1; }
  100% {bottom: 0%;   opacity:1; }
}
@keyframes wave {
  0%{left:0px; opacity: 0;}
  25%{left:200px; opacity:1;transform:rotate(360deg);}
  50%{left:-200px; opacity:1;transform:rotate(0deg);}
  75%{left:100px;  opacity:1;transform:rotate(270deg);}
  100%{left:-100px; opacity:1;transform:rotate(0deg);}
}
.container { position: fixed; }
.pic { position: absolute; opacity: 0;animation:  mysnow 10s,wave 20s;height: 40px; }
</style> 
</head>
<body> 
<meta charset= "utf-8">
<link rel=stylesheet type="text/css" href="app.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="app.js"></script>

<script>
var access;
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into LoveDivine.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}
// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      });
}
window.fbAsyncInit = function() {
  FB.init({
appId      : '220093275095367',
cookie     : true,  // enable cookies to allow the server to access 
// the session
xfbml      : true,  // parse social plugins on this page
version    : 'v2.8' // use graph api version 2.8
});
// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    if (response.status === 'connected') {
    console.log('access token');
    console.log(response.authResponse.accessToken);
    }
    });
};
// Load the SDK asynchronously
(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name );
      document.getElementById('status').innerHTML =
      'Welcome, ' + response.name + '!';
      access = response.id;
      });
}
FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
    });
alert(access);
</script>

<div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true" scope = "public_profile,email" onlogin = "checkLoginState();"></div> 

<!--show fb login status-->
<div id="status">
</div>

<div id="status">
</div>

<body bgcolor="pink">
<!--
<nav>
<li class="board">
<a href="#" class="boardtitle">關於遊戲</a>
<div class="slidedown">
<a href="think.html" class="slidedownindex">概念發想</a>
<a href="howtoplay.html" class="slidedownindex">遊戲玩法</a>
</div>
</li>
<li class="board">
<a href="self.html" class="boardtitle">關於開發者</a>
</div>
</li>
</nav>
-->
<p>
<div id = "love"><img src=https://c2.staticflickr.com/6/5563/30647775783_36aee866c8_o.png"
alt=love align="center" border="0">
</div>
<a id="testher" href="test.php"><p class = "start1"><img class = "start" src="https://github.com/eric8607242/love/blob/master/start.png?raw=true" width ="283" height ="125">
</p></a>
<br>
<a id="her" href="self.php"  style="text-decoration:none;" ><b id = "goself"><font face="cursive" size="5" color="black">
About us
</b></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>
</p>
<div id="snowFlow" > 
</div>
</body>
<script>
window.onload=function(){
  // snowFlow();
  function snowFlow(left,height,src){
    var container=document.createElement('div');
    var pic=document.createElement('img');
    pic.src='https://c2.staticflickr.com/6/5563/30647775783_36aee866c8_o.png';
    var snowFlow=document.getElementById('snowFlow');
    pic.className='pic';
    container.className='container';  
    snowFlow.appendChild(container);
    container.appendChild(pic);
    container.style.left=left+'px';
    container.style.height=height+'px';
    setTimeout(function(){
        snowFlow.removeChild(container);
        },5000);
  }
  setInterval(function(){
      var left=Math.random()*window.innerWidth;
      var height=Math.random()*window.innerHeight;
      var src = 'snow.png';
      snowFlow(left,height,src);
      },500)
}
</script>
</html>
