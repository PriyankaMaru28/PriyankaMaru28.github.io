// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    console.log("clciked..");

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

function visitMyWorks() {
  console.log("askcn");
  document.location.href = "#portfolio";
}
