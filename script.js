var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let key = 10;
var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I know we're already together, but I reallllllllllly",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I know we're already together, but I reallllllllllly",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 600) {
    opacity = 0;
  }
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["wanted to do the whole shebang"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "wanted to do the whole shebang",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["wanted to do the whole shebang"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "wanted to do the whole shebang",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 1200) {
    opacity = 0;
  }
  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "After all, my babygurl",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "After all, my babygurl",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1800) {
    opacity = 0;
  }
  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "you deserve the entire world 🥺",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "you deserve the entire world 🥺",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2400) {
    opacity = 0;
  }

if (frameNumber == 3000) {
  opacity = 0;
}
if (frameNumber > 2400 && frameNumber < 99999) {
  context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

  if (window.innerWidth < 600) {
    drawTextWithLineBreaks(
      [
        "I love you with all my heart darling.",
        "More than I could ever put in words but will spend my lifetime conveying to you.",
      ],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight
    );
  } else {
    context.fillText(
      "I love you with all my heart darling.",
      canvas.width / 2,
      canvas.height / 2 - fontSize / 2
    );

    context.fillText(
      "More than I could ever put in words but will spend my lifetime conveying to you.",
      canvas.width / 2,
      canvas.height / 2 + fontSize / 2
    );
  }

  opacity = opacity + 0.01;
}

  if (frameNumber >= 2700 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "So my love, will you be mine, forever & ever?",
      canvas.width / 2,
      canvas.height / 2 + 120
    );
    thirdOpacity = thirdOpacity + 0.01;

    button.style.display = "block";
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
	if(key == 10) {
    		frameNumber++;
	}
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);

// ... (previous code)

const patternLines = [
  "          MeeraMeeraM                eeraMeeraMe",
  "      eraMeeraMeeraMeera          MeeraMeeraMeeraMee",
  "   raMeeraMeeraMeeraMeeraM      eeraMeeraMeeraMeeraMeer",
  "  aMeeraMeeraMeeraMeeraMeera  MeeraMeeraMeeraMeeraMeeraM",
  " eeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMe",
  " eraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMee",
  " raMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeer",
  " aMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeera",
  "  MeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeer",
  "    aMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeer",
  "      aMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMeera",
  "        MeeraMeeraMeeraMeeraMeeraMeeraMeeraMeeraMe",
  "          eraMeeraMeeraMeeraMeeraMeeraMeeraMeera",
  "            MeeraMeeraMeeraMeeraMeeraMeeraMeer",
  "              aMeeraMeeraMeeraMeeraMeeraMeer",
  "                aMeeraMeeraMeeraMeeraMeera",
  "                   MeeraMeeraMeeraMeera",
  "                       MeeraMeeraMe",
  "                          eraMee",
  "                            ra"
]

function printPattern() {
  context.fillStyle = "rgba(255, 255, 255, 1)";
  var fontSize = Math.min(30, window.innerWidth / 25);
  var lineHeight = 8;
  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "left";

  for (var i = 0; i < patternLines.length; i++) {
    context.fillText(patternLines[i], 50, 50 + i * (fontSize + lineHeight));
  }
}


function loveyou() {
  button.textContent = "I love you <3";
  document.getElementById("surprise-div").style.display="block";
  console.log(frameNumber)
  key=10;
  opacity=opacity - 0.1;
 // var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
 // var lineHeight = 8;
 // context.font = fontSize + "px Comic Sans MS";
 // context.textAlign = "center";
  context.fillText(
      "After all, my babygurl",
      canvas.width / 2,
      canvas.height / 2
    );
}