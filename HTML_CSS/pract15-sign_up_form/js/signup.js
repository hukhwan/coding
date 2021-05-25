//first Name --------

function firstNameLengthCheck() {
  const $result = $(".fnWarning");
  const $image = $(".firstNameError");
  const $form = $(".firstNameInput");
  const $firstName = $("#firstName").val();
  $result.text("");
  const $namevalue = $firstName.length;

  if ($namevalue < 2) {
    $result.text("First Name cannot be empty");
    $result.css("opacity", "100%");
    $result.css("color", "#FF7979");
    $form.css("border-color", "#FF7979");
    $image.css("opacity", "100%");
  } else {
    $result.text("");
    $result.css("opacity", "0%");
    $image.css("opacity", "0%");
    $form.css("border-color", "#dedede");
  }
  return false;
}

$(".submitBtn").on("click", firstNameLengthCheck);

//-----last Name-----

function lastNameLengthCheck() {
  const $result = $(".lnWarning");
  const $image = $(".lastNameError");
  const $form = $(".lastNameInput");
  const $lastName = $("#lastName").val();
  $result.text("");
  const $namevalue = $lastName.length;

  if ($namevalue < 2) {
    $result.text("last Name cannot be empty");
    $result.css("opacity", "100%");
    $result.css("color", "#FF7979");
    $form.css("border-color", "#FF7979");
    $image.css("opacity", "100%");
  } else {
    $result.text("");
    $result.css("opacity", "0%");
    $image.css("opacity", "0%");
    $form.css("border-color", "#dedede");
  }
  return false;
}

$(".submitBtn").on("click", lastNameLengthCheck);

//email ---------

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $(".emWarning");
  const $image = $(".emailError");
  const $form = $(".emailInput");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("");
    $result.css("opacity", "0%");
    $form.css("border-color", "#dedede");
    $image.css("opacity", "0%");
  } else {
    $result.text("Looks like this is not an email");
    $result.css("opacity", "100%");
    $result.css("color", "#FF7979");
    $form.css("border-color", "#FF7979");
    $image.css("opacity", "100%");
  }
  return false;
}

$(".submitBtn").on("click", validate);

//-----password-----

function passwordLengthCheck() {
  const $result = $(".pwWarning");
  const $image = $(".passwordError");
  const $form = $(".passwordInput");
  const $password = $("#password").val();
  $result.text("");
  const $namevalue = $password.length;

  if ($namevalue < 2) {
    $result.text("last Name cannot be empty");
    $result.css("opacity", "100%");
    $result.css("color", "#FF7979");
    $form.css("border-color", "#FF7979");
    $image.css("opacity", "100%");
  } else {
    $result.text("");
    $result.css("opacity", "0%");
    $image.css("opacity", "0%");
    $form.css("border-color", "#dedede");
  }
  return false;
}

$(".submitBtn").on("click", passwordLengthCheck);

//all of function--------
function allCheck() {
  const $firstName = $("#firstName").val();
  const $lastName = $("#lastName").val();
  const $email = $("#email").val();
  const $password = $("#password").val();
  const $check = $(".submitError");

  if ($firstName.length < 2 || $lastName.length < 2 || $email.length < 2 || $password.length < 2) {
    $check.css("opacity", "100%");
  } else {
    $check.css("opacity", "0%");
  }
  return false;
}

$(".submitBtn").on("click", allCheck);
