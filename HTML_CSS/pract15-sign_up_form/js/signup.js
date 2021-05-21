//1. firstName -> length < 1 면 false    Password cannot be empty
//2. lastName -> length < 1 면 false     Password cannot be empty
//3. email 형식                          Looks like this is not an email
//4. password -> length < 1 면 false     Password cannot be empty

//5. submit누를때 -> 1. = true && 2. = true && 3. = true && 4. = true 일때 true.

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

// function firstNameLengthCheck() {
//   const $result = $(".fnWarning");
//   const $image = $(".firstNameError");
//   const $form = $(".firstNameInput");
//   const $firstName = $("#firstName");
//   $result.text("");
//   const $namevalue = $firstName.value.length;

//   if ($namevalue < 2) {
//     $result.text("First Name cannot be empty");
//     $result.css("opacity", "100%");
//     $result.css("color", "#FF7979");
//     $form.css("border-color", "#FF7979");
//     $image.css("opacity", "100%");
//   } else {
//     $result.text("...");
//   }
//   return false;
// }

// $(".submitBtn").on("click", firstNameLengthCheck);
