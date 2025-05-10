
const shapeImages = {
    cube: "3dcube.jpg",
    rectangularPrism: "rectangular-prism.jpg",
    sphere: "sphere-1643269844.jpg",
    cylinder: "shape-cylinder-e1698839248145.jpg",
    cone: "cone.jpg"
  };
  
      function updateShape() {
        const shape = document.getElementById("shape").value;
        const dimensionsDiv = document.getElementById("dimensions");
        const shapeImage = document.getElementById("shapeImage");
        shapeImage.src = shapeImages[shape];
        shapeImage.alt = shape.charAt(0).toUpperCase() + shape.slice(1);
  
        let html = "";
        switch(shape) {
          case "cube":
            html += `
              <div class="input-group">
                <label for="side">Side Length:</label>
                <input type="number" id="side" placeholder="Enter side length" />
              </div>
            `;
            break;
          case "sphere":
            html += `
              <div class="input-group">
                <label for="radius">Radius:</label>
                <input type="number" id="radius" placeholder="Enter radius" />
              </div>
            `;
            break;
            case "rectangularPrism":
    html += `
      <div class="input-group">
        <label for="length">Length:</label>
        <input type="number" id="length" placeholder="Enter length" />
      </div>
      <div class="input-group">
        <label for="width">Width:</label>
        <input type="number" id="width" placeholder="Enter width" />
      </div>
      <div class="input-group">
        <label for="height">Height:</label>
        <input type="number" id="height" placeholder="Enter height" />
      </div>
    `;
    break;
          case "cylinder":
            html += `
              <div class="input-group">
                <label for="radius">Radius:</label>
                <input type="number" id="radius" placeholder="Enter radius" />
              </div>
              <div class="input-group">
                <label for="height">Height:</label>
                <input type="number" id="height" placeholder="Enter height" />
              </div>
            `;
            break;
          case "cone":
            html += `
              <div class="input-group">
                <label for="radius">Radius:</label>
                <input type="number" id="radius" placeholder="Enter radius" />
              </div>
              <div class="input-group">
                <label for="height">Height:</label>
                <input type="number" id="height" placeholder="Enter height" />
              </div>
            `;
            break;
        }
        dimensionsDiv.innerHTML = html;
        document.getElementById("volume").textContent = "Volume: ";
        document.getElementById("surfaceArea").textContent = "Surface Area: ";
      }
  
      function calculate() {
        const shape = document.getElementById("shape").value;
        let volume = 0;
        let surfaceArea = 0;
        const pi = Math.PI;
  
        switch(shape) {
          case "cube":
            const side = parseFloat(document.getElementById("side").value);
            if (isNaN(side) || side <= 0) {
              alert("Please enter a valid positive number for side length.");
              return;
            }
            volume = Math.pow(side, 3);
            surfaceArea = 6 * Math.pow(side, 2);
            break;
            case "rectangularPrism":
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
      alert("Please enter valid positive numbers for length, width, and height.");
      return;
    }
    volume = length * width * height;
    surfaceArea = 2 * (length * width + width * height + height * length);
    break;
          case "sphere":
            const radiusSphere = parseFloat(document.getElementById("radius").value);
            if (isNaN(radiusSphere) || radiusSphere <= 0) {
              alert("Please enter a valid positive number for radius.");
              return;
            }
            volume = (4/3) * pi * Math.pow(radiusSphere, 3);
            surfaceArea = 4 * pi * Math.pow(radiusSphere, 2);
            break;
          case "cylinder":
            const radiusCylinder = parseFloat(document.getElementById("radius").value);
            const heightCylinder = parseFloat(document.getElementById("height").value);
            if (isNaN(radiusCylinder) || radiusCylinder <= 0 || isNaN(heightCylinder) || heightCylinder <= 0) {
              alert("Please enter valid positive numbers for radius and height.");
              return;
            }
            volume = pi * Math.pow(radiusCylinder, 2) * heightCylinder;
            surfaceArea = 2 * pi * radiusCylinder * (radiusCylinder + heightCylinder);
            break;
          case "cone":
            const radiusCone = parseFloat(document.getElementById("radius").value);
            const heightCone = parseFloat(document.getElementById("height").value);
            if (isNaN(radiusCone) || radiusCone <= 0 || isNaN(heightCone) || heightCone <= 0) {
              alert("Please enter valid positive numbers for radius and height.");
              return;
            }
            const slantHeight = Math.sqrt(Math.pow(radiusCone, 2) + Math.pow(heightCone, 2));
            volume = (1/3) * pi * Math.pow(radiusCone, 2) * heightCone;
            surfaceArea = pi * radiusCone * (radiusCone + slantHeight);
            break;
        }
  
        document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)}`;
        document.getElementById("surfaceArea").textContent = `Surface Area: ${surfaceArea.toFixed(2)}`;
      }
  
      
      window.onload = updateShape;