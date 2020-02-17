//Clicking the canvas will loop
//the audio sample until the user
//clicks again to stop it

//We will store the p5.MediaElement
//object in here
var ele;
var button;





function setup() {
  createCanvas(710, 10);
  //Here we create a p5.MediaElement object
  //using the createAudio() function.
    ele = createVideo('media/nyan.mp4', vidLoad);
  ele.loop();
  background(255,255,255);

  button = createButton('stop');
  button.position(400, 68);
  button.mousePressed(stop_song);

  button = createButton('play it');
  button.position(482, 68);
  button.mousePressed(play_speed);

   //Connect/Disconnect Buttons
   connectBtn = createButton("connect");
   connectBtn.position(20,height-30);
   connectBtn.mousePressed(connect);
   connectBtn.style("width:180px");
   
   disconnectBtn = createButton("disconnect");
   disconnectBtn.position(200,height-30);
   disconnectBtn.mousePressed(disconnect);
   disconnectBtn.style("width:180px");
 
}

// This function is called when the video loads
function vidLoad() {
  ele.play(1);
  //trying to use a gradual playback rate 
  // ele.speed = (map(mouseX, 0, width, 0.1, 1));
}

//maybe it has to be in draw?
function draw(){
    ele.playbackRate = (map(mouseX, 0, width, 0.1, 1));

}
function twice_speed() {
  ele.speed(4);
}

function half_speed() {
  ele.speed(0.5);
}

// function reverse_speed() {
//   ele.speed(-1);
// }

function stop_song() {
  ele.stop();
}
function play_speed() {
  ele.play()
  ele.speed(0.5);
}

function send(data){
  if(connectedDevice != null){
  sendText = "sent: "+data; 
  uBitSend(connectedDevice,data);
  }else{
    print("device not connected!");
  }
}

function connect() {
  uBitConnectDevice(uBitEventHandler);

}

function disconnect() {
  //connectedDevice.close();
  uBitDisconnect(connectedDevice);

}

function handleData(data){
  //print(data);
  recvText = "recv: "+ data.data;
  Rate = int(data.data);
  
}
