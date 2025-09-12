<script>
  const input = document.getElementById("colorInput");

  input.addEventListener("input", function () {
    const value = input.value.trim();

    // Split colors by spaces or commas
    const colors = value.split(/[\s,]+/).filter(c => c); // removes empty strings

    if (colors.length === 1) {
      // Just one color, set solid background
      document.body.style.background = colors[0];
    } else if (colors.length > 1) {
      // Multiple colors, set a gradient
      document.body.style.background = `linear-gradient(to right, ${colors.join(", ")})`;
    } else {
      // If input is empty or invalid
      document.body.style.background = "";
    }
  });
</script>
