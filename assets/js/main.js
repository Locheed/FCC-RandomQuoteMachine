// - - - - - Global variables. - - - - - //
var angle = 0;
var rgbColor = [];

// - - - - - Randomize RGB colors. - - - - - //
function randColor() {

  // - - - - - Clear array for new run. - - - - - //
  rgbColor = [];

  for (i = 0; i < 6; i++) {
    rgbColor.push(Math.floor((Math.random() * 256) + 0))

  }
  // - - - - - Randomize gradient angle. - - - - - //
  angle = Math.floor((Math.random() * 360) + 0);
};


// - - - - - JSONP request and screen width check, when page loads first time. - - - - - //
newQuote();
checkScreen();

// - - - - - Button click fires these function calls. - - - - - //
function onClick() {
  checkScreen();
  fadeOut();
  setTimeout(function(){ fadeIn(); }, 1500);

}
// - - - - - Injects JSONP to head and fetches new quote when button is clicked. - - - - - //
function newQuote() {

  var script = document.createElement('script');
  script.src = 'http://quotes.stormconsultancy.co.uk/quotes/random.json?callback=getQuote'

  document.getElementsByTagName('head')[0].appendChild(script);
// or document.head.appendChild(script) in modern browsers
}

// - - - - - Fades out quote. - - - - - //
function fadeOut() {
  document.getElementsByTagName('p')[0].className = 'anim';
  document.getElementsByTagName('p')[1].className = 'anim';
}
// - - - - - Fades in new quote. - - - - - //
function fadeIn() {
  newQuote();
  document.getElementsByTagName('p')[0].className = '';
  document.getElementsByTagName('p')[1].className = '';
}

// - - - - - Writes quote and author to HTML. - - - - - //
function getQuote(data) {

    document.getElementById("quote").innerHTML = data.quote;
    document.getElementById("author").innerHTML = "- " + data.author;
}

// - - - - - Check screen width and either change background color or bordercolor. - - - - - //
function checkScreen() {
  var mq = window.matchMedia( "(max-width: 1024px)");
  if (mq.matches) {
    changeBG();
  }
  else {
    borderBG();
  };
};

// - - - - - Setting background color with random linear gradient rgb values and random angle. - - - - - //
function changeBG() {

  randColor();
  var rgb = "linear-gradient(" + angle + "deg, " + "rgb(" + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2] + ")" + ", " + "rgb(" + rgbColor[3] + ", " + rgbColor[4] + ", " + rgbColor[5] + "))" + " no-repeat center center fixed"
  document.body.style.background = rgb;

};

// - - - - - Changes border color, if screen size is under 1024px. - - - - - //
function borderBG() {
  randColor();
  var borderBG = "3px solid rgba(" + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2] + ", " + "0.4" +")";
  document.getElementById('content').style.border = borderBG;

};
