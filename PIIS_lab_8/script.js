document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("drawingCanvas");
  const ctx = canvas.getContext("2d");

  const shapeSelector = document.getElementById("shape");
  const colorPicker = document.getElementById("color");

  let isDrawing = false;
  let startX = 0;
  let startY = 0;
  let currentShape = null;
  let drawnShapes = [];

  function redrawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawnShapes.forEach(shape => {
      ctx.beginPath();
      ctx.fillStyle = shape.color;
      if (shape.type === "circle") {
        ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
      } else if (shape.type === "rectangle") {
        ctx.rect(shape.x, shape.y, shape.width, shape.height);
      }
      ctx.fill();
      ctx.closePath();
    });
  }

  canvas.addEventListener("mousedown", (event) => {
    const rect = canvas.getBoundingClientRect();
    startX = event.clientX - rect.left;
    startY = event.clientY - rect.top;

    isDrawing = true;
  });

  canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = event.clientX - rect.left;
    const currentY = event.clientY - rect.top;

    const shape = shapeSelector.value;
    const color = colorPicker.value;

    redrawShapes();

    ctx.beginPath();
    ctx.fillStyle = color;

    if (shape === "circle") {
      const radius = Math.sqrt((currentX - startX) ** 2 + (currentY - startY) ** 2);
      ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    } else if (shape === "rectangle") {
      const width = currentX - startX;
      const height = currentY - startY;
      ctx.rect(startX, startY, width, height);
    }

    ctx.fill();
    ctx.closePath();
  });

  canvas.addEventListener("mouseup", (event) => {
    const rect = canvas.getBoundingClientRect();
    const endX = event.clientX - rect.left;
    const endY = event.clientY - rect.top;

    const shape = shapeSelector.value;
    const color = colorPicker.value;

    isDrawing = false;

    if (shape === "circle") {
      const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
      drawnShapes.push({ type: "circle", x: startX, y: startY, radius, color });
    } else if (shape === "rectangle") {
      const width = endX - startX;
      const height = endY - startY;
      drawnShapes.push({ type: "rectangle", x: startX, y: startY, width, height, color });
    }

    redrawShapes();
  });

  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
});
