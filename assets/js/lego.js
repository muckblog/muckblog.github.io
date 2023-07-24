var isDown = false;
let currentDiv;

const bgLegoElements = document.getElementsByClassName("bg-lego");

const mySounds = ['lego-drop1', 'lego-drop2', 'lego-drop3', 'lego-drop4'];

function handleMouseDown(e) {
  document.getElementById('lego-pickup').play();
  isDown = true;
  const offset = [
    this.offsetLeft - e.clientX,
    this.offsetTop - e.clientY
  ];
  this.setAttribute('data-offset', JSON.stringify(offset));
  currentDiv = this;
}

function handleMouseUp() {
  isDown = false;
  randomSound();
}

function handleMouseMove(event) {
  event.preventDefault();
  if (isDown && currentDiv) {
    const mousePosition = {
      x: event.clientX,
      y: event.clientY
    };
    const offset = JSON.parse(currentDiv.getAttribute('data-offset'));
    currentDiv.style.left = (mousePosition.x + offset[0]) + 'px';
    currentDiv.style.top = (mousePosition.y + offset[1]) + 'px';
  }
}

for (const div of bgLegoElements) {
  div.addEventListener('mousedown', handleMouseDown, true);
  div.addEventListener('mouseup', handleMouseUp, true);
  div.addEventListener('mousemove', handleMouseMove, true);
}

function randomSound() {
  var index = Math.floor(Math.random() * 1000) % mySounds.length;
  var id = mySounds[index];
  var audioElement = document.getElementById(id);
  audioElement.play();
}