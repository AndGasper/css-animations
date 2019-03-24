const element = document.getElementById('watchme'); 

function listener(event) {
    console.log("i'm the listener - event:", event.type);
    const l = document.createElement('li');
    switch(event.type) {
        case "animationstart":
            l.innerHTML = `Started: elapsed time is: ${event.elapsedTime}`;
            break;
        case "animationend":
            l.innerHTML = `Ended: elapsed time is ${event.elapsedTime}`; 
            break;
        case "animationiteration":
            l.innerHTML = `New loop started at time: ${event.elapsedTime}`; 
            break;
    }
    const outputArea = document.getElementById('output');
    outputArea.appendChild(l); 
}

// how was this easier than just typing the same thing three times?
// sometimes, you just gotta be extra...
const events = [
  {
    "type": "animationstart",
    "callback": listener,
    "useCapture": false
  },
  {
    "type": "animationend",
    "callback": listener,
    "useCapture": false
  },
  {
    "type": "animationiteration",
    "callback": listener,
    "useCapture": false
  }
];
// attach event handlers 
events.map(({ type, callback, useCapture }) => {
  element.addEventListener(type, callback, useCapture); 
})

element.className = "slidein";