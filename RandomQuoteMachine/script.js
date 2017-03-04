// Quotes Array
var quotes = [
  {
    "quote": "It's a good week to have a good week."
  }, 
  {
    "quote": "Will it be easy? Nope. Worth it? Absolutely."
  }, 
  {
    "quote": "Be so good they can't ignore you.",
    "author": "Steve Martin"
  }, 
  {
    "quote": "Life begins after coffee."
  }, 
  {
    "quote": "Make today so awesome that yesterday gets jealous."
  }, 
  {
    "quote": "You can't be both awesome and negative. Choose one.",
    "author": "Karen Salmansohn"
  }, 
  {
    "quote": "Don't wait for opportunity. Create it."
  }, 
  {
    "quote": "Life is like a cup of tea. It's all in how you make it."
  }, 
  {
    "quote": "Wake up with determination. Go to bed with satisfaction."
  }, 
  {
    "quote": "The grass is greener where you water it."
  }, 
  {
    "quote": "Dear Monday. I want to break up. I'm seeing Tuesday and dreaming about Friday. It's not me, It's you."
  }, 
  {
    "quote": "Everything It's hard before It is easy.",
    "author": "Goethe J.W."
  }, 
  {
    "quote": "Wake up. Kick ass. Be kind. Repeat."
  }, 
  {
    "quote": "Either you run the day or the day runs you."
  }, 
  {
    "quote": "Every morning you have two choices: Continue to sleep with your dreams, or wake up and chase them."
  }, 
  {
    "quote": "The dream is Free. Hustle sold separately."
  }, 
  {
    "quote": "Some succeed because they are destined to but most succeed because they are detemined to.",
    "author": "Henry Van Dyke"
  }, 
  {
    "quote": "Quit slacking and make it happen."
  }, 
  {
    "quote": "Put your positive pants on."
  }, 
  {
    "quote": "You don't have to be great to start, but you have to start to be great.",
    "author": "Zig Ziglar"
  }, 
  {
    "quote": "Punch today in the face."
  }, 
  {
    "quote": "Get up,dress up, show up and never give up."
  }, 
  {
    "quote": "Do what you have to do until you can do what you want to do.",
    "author": "Oprah Winfrey"
  }, 
  {
    "quote": "Stay humble. Hustle hard."
  }, 
  {
    "quote": "Better days are coming: They are called Saturday &amp; Sunday."
  }, 
  {
    "quote": "Self-confindence is the best outfit. Rock It and own It."
  }, 
  {
    "quote": "I can. I will."
  }, 
  {
    "quote": "May your coffee be strong and your Monday productive."
  }, 
  {
    "quote": "I'm in charge of how I feel, and today I'm choosing happiness."
  },
  {
    "quote": "Suck it up Buttercup"
  }
];
// Colors Array
var colors = [
  "#E0D144", "#E4A629", "#F39040", "#E66751", "#CA83A5", 
  "#A39BCB", "#8EB7BF", "#6DC4A6", "#8AA651", "#0B615E"
];

// Note object
function Note() {
  this.next = 0;  
  this.quoteText = document.getElementById("notes");
  this.auth = document.getElementById("autor");
  // get the next note
  this.nextQuote = function(){
    // random number between 0 and 29
    this.next = Math.floor(Math.random()*30);
    this.quoteText = quotes[this.next].quote;
    // if there is an Author of the current note
    if(quotes[this.next].author){
      this.auth = "- " + quotes[this.next].author;
    }else {
      this.auth = "";
    }
    return this.quoteText;
  };

}

// Color object
function Color(){
  this.nextC = 0;
  this.colorCode = "";
  // get the next color
  this.nextColor = function(){
    // random number between 0 and 9
    this.nextC = Math.floor(Math.random()*10);
    this.colorCode = colors[this.nextC];
    return this.colorCode;
  };
}

var randomNote;
var randomColor;
var nText = document.getElementById("notes");
var nAuthor = document.getElementById("autor");
var boxColor = document.getElementById("quotebox");
var nextBtn = document.getElementById("next");
var tweetBtn = document.getElementById("tweet");



window.onload = function(){
  // Note object instanzieren
  randomNote = new Note();
  randomNote.nextQuote();
  // Color object instanzieren
  randomColor = new Color();
  randomColor.nextColor();

  // the first Quote when Site loaded
  nText.value = nText.innerHTML = randomNote.nextQuote();

    //next button event
  nextBtn.onclick = function(){
    nText.innerHTML = randomNote.nextQuote();
    nAuthor.innerHTML = randomNote.auth;
    boxColor.style.backgroundColor = randomColor.nextColor();
  };

  //next button event
  tweetBtn.onclick = function(){
    var url = "http://twitter.com/share?text=" + randomNote.quoteText;
    window.open(url, "twitter", "width=600,height=400");  
  };

};