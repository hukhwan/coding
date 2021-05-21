function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $(".result");
  const $image = $(".resultImg");
  const $form = $(".form");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(" OK :)");
    $result.css("opacity", "100%");
    $result.css("color", "gray");
    $image.css("opacity", "0%");
  } else {
    $result.text(" Please provide a valid email :(");
    $result.css("opacity", "100%");
    $result.css("color", "red");
    $form.css("border-color", "red");
    $image.css("opacity", "100%");
  }
  return false;
}

$("#validate").on("click", validate);
