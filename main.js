let colors = ["blue", "red", "green", "pink"];

    let boxes = document.querySelectorAll(".box");
    let boxPalette = document.getElementById("boxPalette");
    let bgPalette = document.getElementById("bgPalette");

    
    for (let i = 0; i < colors.length; i++) {
      let colorDiv = document.createElement("div");
      colorDiv.className = "color";
      colorDiv.style.backgroundColor = colors[i];

      colorDiv.onclick = function () {
        boxes.forEach(function (box) {
          box.style.backgroundColor = colors[i];
        });
      };

      boxPalette.appendChild(colorDiv);
    }

    
    for (let i = 0; i < colors.length; i++) {
      let colorDiv = document.createElement("div");
      colorDiv.className = "color";
      colorDiv.style.backgroundColor = colors[i];

      colorDiv.onclick = function () {
        document.body.style.backgroundColor = colors[i];
      };

      bgPalette.appendChild(colorDiv);
    } 