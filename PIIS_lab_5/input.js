let targets = document.querySelectorAll('.target');

targets.forEach(target => {
  let isOneClickMove = false;
  let isDoubleClickMove = false;
  let initialPosition = { left: target.offsetLeft, top: target.offsetTop };
  let offsetX, offsetY;


  function resetStyles() {
    target.style.zIndex = '';
    target.style.backgroundColor = 'red';
  }

  target.addEventListener('mousedown', function (event) {
    event.preventDefault();
    if (isDoubleClickMove) return;

    isOneClickMove = true;
    offsetX = event.clientX - target.offsetLeft;
    offsetY = event.clientY - target.offsetTop;

    target.style.zIndex = '5';
  });

  document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isOneClickMove || isDoubleClickMove) {
      target.style.left = (event.clientX - offsetX) + 'px';
      target.style.top = (event.clientY - offsetY) + 'px';
    }
  });

  document.addEventListener('mouseup', function (event) {
    event.preventDefault();
    if (isDoubleClickMove) return;

    isOneClickMove = false;
    initialPosition.left = target.offsetLeft;
    initialPosition.top = target.offsetTop;
    resetStyles();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && (isDoubleClickMove || isOneClickMove)) {
      isDoubleClickMove = false;
      isOneClickMove = false;
      resetStyles();
      target.style.left = initialPosition.left + 'px';
      target.style.top = initialPosition.top + 'px';
    }
  });

  target.addEventListener('dblclick', function (event) {
    event.preventDefault();
    isDoubleClickMove = true;

    offsetX = event.clientX - target.offsetLeft;
    offsetY = event.clientY - target.offsetTop;

    target.style.zIndex = '5';
    target.style.backgroundColor = '#ff9999';
  });

  target.addEventListener('click', function (event) {
    event.preventDefault();
    isDoubleClickMove = false;
    resetStyles();
  });
});
