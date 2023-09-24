window.addEventListener('DOMContentLoaded', (event) => {
  var textElement = document.getElementById('changeText');
  var texts = [' Student.', ' Webdesigner.', ' Fullstack Webdeveloper.',' SEO Specialist.'];
  var currentIndex = 0;

  function typeWriter() {
    var text = texts[currentIndex];
    var textLength = text.length;
    var speed = 100; // Adjust typing speed here (in milliseconds)
    var i = 0;

    function type() {
      if (i < textLength) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, 1500); // Delay before erasing text
      }
    }

    function erase() {
      var textValue = textElement.textContent;
      if (textValue.length > 0) {
        textElement.textContent = textValue.slice(0, -1);
        setTimeout(erase, speed);
      } else {
        currentIndex = (currentIndex + 1) % texts.length;
        typeWriter(); // Move to the next text
      }
    }

    type();
  }

  typeWriter();
});