document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("drawingArea");
  const shapeSelector = document.getElementById("shape");
  const colorPicker = document.getElementById("color");

  let isDrawing = false;
  let startX = 0;
  let startY = 0;
  let currentElement = null;

  svg.addEventListener("mousedown", (event) => {
    const rect = svg.getBoundingClientRect();
    startX = event.clientX - rect.left;
    startY = event.clientY - rect.top;
    isDrawing = true;

    const shape = shapeSelector.value;
    const color = colorPicker.value;

    if (shape === "circle") {
      currentElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      currentElement.setAttribute("cx", startX);
      currentElement.setAttribute("cy", startY);
      currentElement.setAttribute("r", 0);
    } else if (shape === "rectangle") {
      currentElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      currentElement.setAttribute("x", startX);
      currentElement.setAttribute("y", startY);
      currentElement.setAttribute("width", 0);
      currentElement.setAttribute("height", 0);
    }

    if (currentElement) {
      currentElement.setAttribute("fill", color);
      currentElement.setAttribute("stroke", "black");
      svg.appendChild(currentElement);
    }
  });

  svg.addEventListener("mousemove", (event) => {
    if (!isDrawing || !currentElement) return;

    const rect = svg.getBoundingClientRect();
    const currentX = event.clientX - rect.left;
    const currentY = event.clientY - rect.top;

    if (currentElement.tagName === "circle") {
      const radius = Math.sqrt((currentX - startX) ** 2 + (currentY - startY) ** 2);
      currentElement.setAttribute("r", radius);
    } else if (currentElement.tagName === "rect") {
      const width = Math.abs(currentX - startX);
      const height = Math.abs(currentY - startY);
      currentElement.setAttribute("width", width);
      currentElement.setAttribute("height", height);

      if (currentX < startX) currentElement.setAttribute("x", currentX);
      if (currentY < startY) currentElement.setAttribute("y", currentY);
    }
  });

  svg.addEventListener("mouseup", () => {
    isDrawing = false;
    currentElement = null;
  });

  svg.addEventListener("mouseleave", () => {
    isDrawing = false;
    currentElement = null;
  });
});
