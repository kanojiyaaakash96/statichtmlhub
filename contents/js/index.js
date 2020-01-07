// $(document).ready(function () {
// });
var mybutton = document.getElementById("back2top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
    mybutton.style.display = "block";
    $(".navbar").css("background-color", "#e6e6e6");
    $(".navbar-brand").css("background", "rgba(255, 255, 255, 0.0)");
  } else {
    mybutton.style.display = "none";
    $(".navbar").css("background-color", "rgba(29,29,29,0.1)");
    $(".navbar-brand").css("background", "rgba(255, 255, 255, 0.397)");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

function sendMail() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message_email').value;

  console.log("Name: " + name + "Email: " + email + "Phone: " + phone + "Message: " + message);
  var cell = "";

  if (name == "") {
    cell += "Name, ";
  }
  if (email == "") {
    cell += "Email, ";
  }
  if (phone == "") {
    cell += "Phone, ";
  }
  if (message == "") {
    cell += "Message.";
  }
  if (cell != "") {

    alert("Please enter: " + cell);

    return false;
  }
  else {
    var data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }
  }

  document.querySelectorAll(".loader2")[0].style.visibility = "visible";
  $.ajax({
    method: 'POST',
    url: 'http://oceanitsolutions.in/contents/phpmail/email.php',
    data: data,
    datatype: 'json',
    success: mailSuccess,
    error: function () {
      alert('Failed to send request. Please try again.');
      document.querySelectorAll(".loader2")[0].style.visibility = "hidden";
    }
  });
}

function mailSuccess(result) {
  document.querySelectorAll(".loader2")[0].style.visibility = "hidden";
  $('#contactForm')[0].reset();
  alert(result);
}