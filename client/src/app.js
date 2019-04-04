// IIFE -- Immediately Invoked Function Expression

/* File Name: ZeyuMaAssignment01
   Student's Name: Zeyu Ma
   StudentID: 300737060
   Date: 02/12/2019 */

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
