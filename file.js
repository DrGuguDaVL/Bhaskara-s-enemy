const input = document.getElementById("colorInput");

  input.addEventListener("input", function () {
    const value = input.value.trim();

    // Split colors by spaces or commas
    const colors = value.split(/[\s,]+/).filter(c => c);

    if (colors.length === 1) {
      // One color
      document.body.style.background = colors[0];
    } else if (colors.length > 1) {
      // Multiple colors: gradient
      document.body.style.background = `linear-gradient(to right, ${colors.join(", ")})`;
    } else {
      // Empty input, reset background
      document.body.style.background = "";
    }
  });
