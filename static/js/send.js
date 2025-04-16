document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comp-klchh02z1");
  const message = document.getElementById("comp-klchh041");
  const input = document.getElementById("comp-klchh03c");
  const button = document.getElementById("comp-klchh03o1");

  const formSecond = document.getElementById("comp-kldp8gg3");
  const messageSecond = document.getElementById("comp-kldp8ggn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.style.display = "block";
    input.style.display = "none";
    button.style.display = "none";
  });

  if (formSecond) {
    formSecond.addEventListener("submit", function (event) {
      event.preventDefault();
      messageSecond.style.display = "block";
      this.style.display = "none";
    });
  }
});
