const output = document.getElementById("output");

for (let i = 1; i <= 100; i++) {
    const line = document.createElement("div");
    line.textContent = i;
    output.appendChild(line);
}
