// IIFE -- Immediately Invoked Function Expression
/* Author: Tom Tsiliopoulos
      Project Part 2 Modified by: Team Musketeer
      Members: Zeyu Ma 300737060
               Syed Nasir Gohary 300937424
               Abubakir Myrzaly 300931945
               Sushmita Nandalan 300923159 */

(function() {
  function Start() {
    console.log(
      `%c App Started...`,
      "font-size: 20px; color: blue; font-weight: bold"
    );

    $(".btn-danger").click(function(event) {
      if (!confirm("Are you sure???")) {
        event.preventDefault();
        window.location.assign("/contact-list");
      }
    });
  }

  window.addEventListener("load", Start);
})();

function ValidateForm() {
  var emailAddress = document.forms["contactMe"]["txtEmailAddress"];

  if (
    emailAddress.value.indexOf("@", 0) < 0 ||
    emailAddress.value.indexOf(".", 0) < 0
  ) {
    window.alert("Please enter a valid e-mail address.");
    if (window.event) {
      window.event.returnValue = false;
    } else {
      preventDefault();
    }
  }
  return true;
}
