const loginButton = document.querySelector(".loginBtn");

loginButton.addEventListener("click", function () {
  const loginId = document.querySelector(".id").value;
  const loginPassword = document.querySelector(".password").value;

  loginId && loginPassword
    ? (document.querySelector(".loginBtn").style.backgroundColor = "blue")
    : 0;
});
var fileInput  = document.querySelector( "#id_photo" ),
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");

// Show image
fileInput.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
    var img = new Image();
    // var imgWidth =
    img.onload = function(){
      canvas.width = 300;
      canvas.height = 300;
      ctx.drawImage(img,0,0,300,300);
    };
    img.src = event.target.result;
    // img.width = img.width*0.5
    // canvas.height = img.height;
  };
  reader.readAsDataURL(e.target.files[0]);
}

//사이드바
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var mainContent = document.getElementById('main-content');
  if (sidebar.style.left === '-250px') {
    sidebar.style.left = '0';
    mainContent.style.marginLeft = '250px';
  } else {
    sidebar.style.left = '-250px';
    mainContent.style.marginLeft = '0';
  }
}