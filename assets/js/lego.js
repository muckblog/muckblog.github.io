var isDown = false;
let currentDiv;

const div = document.getElementById("bg-lego-1");

const mySounds = [ 'lego-drop1', 'lego-drop2', 'lego-drop3', 'lego-drop4' ];

div.addEventListener('mousedown', function(e) {
      document.getElementById('lego-pickup').play();
      isDown = true;
      const offset = [
          div.offsetLeft - e.clientX,
          div.offsetTop - e.clientY
      ];
      div.setAttribute('data-offset', JSON.stringify(offset));
      currentDiv = div;
}, true);

div.addEventListener('mouseup', function() {
    isDown = false;
    randomSound();
}, true);

div.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown && currentDiv) {
    const mousePosition = {    
            x : event.clientX,
            y : event.clientY    
        };
        const offset = JSON.parse(currentDiv.getAttribute('data-offset'));
        currentDiv.style.left = (mousePosition.x + offset[0]) + 'px';
        currentDiv.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

function randomSound() {
      var index = Math.floor(Math.random() * 1000) % mySounds.length;
      var id = mySounds[index];
      var audioElement = document.getElementById(id);
      audioElement.play();
};