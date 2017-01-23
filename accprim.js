var watchID = null;
var z=0;
var prim=1;
var primtal=1000;

//I onLoad tilføjes eventlistener
function onLoad(){
document.addEventListener("deviceready", onDeviceReady, false);
}

//kalder startfunktionen når enheden er klar
function onDeviceReady() {
startWatch();
}

//måler acceleration i bestemte intervaller
function startWatch() {
var options = { frequency: 10 };//vis værdi hvert sekund
watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options); //
}

function stopWatch() {
if (watchID) {
navigator.accelerometer.clearWatch(watchID);
watchID = null;
}
}

function onSuccess(acceleration) {
//Gem sensorværdier
var accX = acceleration.x;
var accY = acceleration.y;
var accZ = acceleration.z;
var timestamp = acceleration.timestamp;
var primtal = accX*37;
//Udskriv værdier i div med navnet accelerometer
for(var j=1;j<=primtal;j++){
		prim=1;	
		for(var i=2;i<j;i++){
			z=j%i;
			if (z==0)
				prim=0;
		}
		if (prim==1)
			document.getElementById("primsvar").innerHTML += j+" ";
	}
document.getElementById('accelerometer').innerHTML = 
'Acceleration X: ' + accX + '<br />' +
'Acceleration Y: ' + accY + '<br />' +
'Acceleration Z: ' + accZ + '<br />' +
'Timestamp	   : ' + timestamp + '<br />' ;
}

function onError() {
alert('onError!');
}



	



