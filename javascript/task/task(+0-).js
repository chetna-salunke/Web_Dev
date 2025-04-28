let count = 0;

document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");

  display.textContent = count;

  plusButton.addEventListener("click", function() {
    count++;
    display.textContent = count;
  });

  minusButton.addEventListener("click", function() {
    count--;
    display.textContent = count;
  });
});
ygtrewq