 const input = document.getElementById("colorInput");

  input.addEventListener("input", function () {
    // Get the color typed in
    const color = input.value;

    // Try to set the background color of the wrapper
    document.getElementById("output").style.backgroundColor = color;
  });
