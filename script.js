
let ball = document.getElementById("Ball");

ball.addEventListener("click", () => {
  document.getElementById("textbox").innerHTML = 
    '<span class="highlight-text">You\'ve clicked on the inside of the purple diamond of the royal scepter!';
});
