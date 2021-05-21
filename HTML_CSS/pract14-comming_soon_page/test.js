// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// function validate() {
//   const $result = $("#result");
//   const email = $("#email").val();
//   $result.text("");

//   if (validateEmail(email)) {
//     $result.text(email + " is valid :)");
//     $result.css("color", "white");
//   } else {
//     $result.text(email + " is not valid :(");
//     $result.css("color", "red");
//   }
//   return false;
// }

// $("#validate").on("click", validate);

//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $(".result");
  //   const $form = $(".form");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(" OK :)");
    $result.css("opacity", "100%");
    $result.css("color", "red");
  } else {
    $result.text(" Please provide a valid email :)");
    $result.css("opacity", "100%");
    $result.css("color", "red");
    // $form.css("border-color", "red");
  }
  return false;
}

$("#validate").on("click", validate);
