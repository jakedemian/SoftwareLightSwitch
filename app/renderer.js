const { SerialPort } = require('serialport')
const tableify = require('tableify')
var port;

async function listSerialPorts() {  
  await SerialPort.list().then((ports, err) => {
    if(err) {
      document.getElementById('error').textContent = err.message
      return
    } else {
      document.getElementById('error').textContent = ''
    }

    if (ports.length === 0) {
      document.getElementById('error').textContent = 'No ports discovered'
    }
  });

  establishConnection();
}

function establishConnection(){
  port = new SerialPort({path: 'COM3', baudRate: 9600}, function (err) {
    if(err){
      console.log(err);
    }
  });
}

function turnOn() {
  port.write("ON");
}
function turnOff() {
  port.write("OFF");
}

listSerialPorts()
