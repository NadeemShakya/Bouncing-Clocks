let hr_colorR;
let hr_colorG;
let hr_colorB;

let min_colorR;
let min_colorG;
let min_colorB;

let sec_colorR;
let sec_colorG;
let sec_colorB;
function setup() {

  //Defining Random Colors for Hour 
  hr_colorR = floor(random(0, 255));
  hr_colorG = floor(random(0, 255));
  hr_colorB = floor(random(0, 255));

  //Defining Random Colors for Minute 
  min_colorR = floor(random(0, 255));
  min_colorG = floor(random(0, 255));
  min_colorB = floor(random(0, 255));
  
  //Defining Random Colors for Second 
  sec_colorR = floor(random(0, 255));
  sec_colorG = floor(random(0, 255));
  sec_colorB = floor(random(0, 255));
}

// Hour Setup
let hrxAxis = 3;
let hrxAxisSpeed = 3;
let hryAxis = 200;
let hryAxisSpeed = 3;


//Minute Setup
let minxAxis = 200;
let minxAxisSpeed = 4;
let minyAxis = 500;
let minyAxisSpeed = 1;

//Second Setup
let secxAxis = 400;
let secxAxisSpeed = 1;
let secyAxis = 0;
let secyAxisSpeed = 4;

function draw() {
  let hrWidth = (width / 3) - 100 ;                // Defines the Hour Divison Extremes.
  let minWidth = ((width / 3) + hrWidth) - 100;    // Defines the Minute Division Extremes.
  let secWidth = ((width / 3) + minWidth);         // Defines the Second Division Extremes.

  let hr = hour();                                 // Get system hour.
  let min = minute();                              // Get system minute.
  let sec = second();                              // Get system second.

  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  let offset = floor(random(1, 3));

  // hour section START.
  if(hrxAxis >= hrWidth) {
    hrxAxisSpeed = -offset;
  } 

  if(hrxAxis <= 0) {
    hrxAxisSpeed = offset;

  }

  if(hryAxis <= 80) {
    hryAxisSpeed =   offset;
  }

  if(hryAxis >= height) {
    hryAxisSpeed = -offset;
  }

  hrxAxis = hrxAxis + hrxAxisSpeed;
  hryAxis = hryAxis + hryAxisSpeed;

  if(hr < 10) {
    if(hr == 0) {
      hr = 24;
    }else {
      hr = "0" + hr;
    }
  }

  // hour section STOP.


  // minute section START.
  if(minxAxis >= minWidth) {
    minxAxisSpeed = -offset;
  } 

  if(minxAxis <= hrWidth) {
    minxAxisSpeed = offset;

  }

  if(minyAxis <= 80) {
    minyAxisSpeed = offset;
  }

  if(minyAxis >= height) {
    minyAxisSpeed = -offset;
  }
  minxAxis += minxAxisSpeed;
  minyAxis += minyAxisSpeed;
  
  if(min < 10) {
    
      min = "0" + min ;
    
  }
  // minute section STOP.

  // second section START.
  if(secxAxis >= secWidth) {
    secxAxisSpeed = -offset;
  }

  if(secxAxis <= minWidth) {
    secxAxisSpeed = offset;
  }

  if(secyAxis >= height) {
    secyAxisSpeed = -offset;
  }

  if(secyAxis <= 80) {
    secyAxisSpeed = offset;
  }
  secxAxis = secxAxis + secxAxisSpeed;
  secyAxis = secyAxis + secyAxisSpeed;
  if(sec < 10) {
    if(sec == 0) {
      sec = 60;
    }else {
      sec = "0" + sec;
    }
  }

  // second section STOP.

  textSize(120);  
  fill(hr_colorR, hr_colorG, hr_colorB);
  text(hr, hrxAxis, hryAxis);
  textSize(30);
  text("Hour", hrxAxis + 130, hryAxis);
  fill(min_colorR, min_colorG, min_colorB);
  textSize(110);
  text(min, minxAxis , minyAxis);
  textSize(30);
  text("Minutes", minxAxis + 125, minyAxis);
  fill(sec_colorR, sec_colorG, sec_colorB);
  textSize(35);
  text("Seconds", secxAxis + 100, secyAxis);
  textSize(90);
  text(sec, secxAxis, secyAxis);

}     // End of Draw Function.

