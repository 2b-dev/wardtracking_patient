$(".btn-view-password").on("click", function() {
  if ($(".pass-ip").attr("type") === "password") {
    $(".pass-ip").attr("type", "text");
  } else {
    $(".pass-ip").attr("type", "password");
  }
});
