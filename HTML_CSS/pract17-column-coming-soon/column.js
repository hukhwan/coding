//email ---------

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $(".Warning");
  const $form = $("#email");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("Successfully Complete!");
    $result.css("color", "blue");
    $form.css("border-color", "#c2d3ff");
  } else if (email.length < 2) {
    $result.text("???? this is blank!");
    $result.css("color", "red");
    $form.css("border-color", "#FF7979");
  } else {
    $result.text("Please provide a valid email address");
    $result.css("color", "red");
    $form.css("border-color", "#FF7979");
  }
  return false;
}

$(".submit").on("click", validate);
