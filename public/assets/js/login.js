function previewImg() {
  const inputImg = document.querySelector("#file-input"),
    imgPreview = document.querySelector("#img-preview");

  const fileReader = new FileReader();
  fileReader.readAsDataURL(inputImg.files[0]);

  fileReader.onload = (e) => (imgPreview.src = e.target.result);
}

$(document).ready(function () {
  $("form.login").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "post",
      url: "/users/auth_login",
      data: $(this).serialize(),
      dataType: "json",
      success: function (response) {
        if (response.status) {
          window.location = "/contact";
        } else {
          $.each(response.errors, function (key, value) {
            let input = `[name = ${key}]`;

            if (value != "") {
              $(input).parents(".field").addClass("shake error");
              $(input).parents(".field").find(".error-txt").text(value);

              //remove shake class after 500ms
              setTimeout(() => {
                $(input).parents(".field").removeClass("shake");
              }, 500);

              $(input).keyup(function (e) {
                if ($(input).val() == "") {
                  $(input).parents(".field").addClass("error");
                  $(input).parents(".field").removeClass("valid");
                } else {
                  $(input).parents(".field").removeClass("error");
                  $(input).parents(".field").addClass("valid");
                }
              });
            }
          });
        }
      },
    });
  });
});
