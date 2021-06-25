$(document).ready(function () {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  const cursor = $(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.css("top", e.pageY - 10);
    cursor.css("left", e.pageX - 10);
  });

  document.addEventListener("click", () => {
    cursor.addClass("expand");

    setTimeout(() => {
      cursor.removeClass("expand");
    }, 500);
  });
});
