const { SerialPort } = require('serialport')
const arg = process.argv[2];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const main = async () => {
  if(!arg) {
    console.log("Argument `on` or `off` required.");
    return;
  }

  if(arg !== "on" && arg !== "off"){
    console.log("Invalid argument.  Only accepting `on` or `off`.");
    return;
  }

  console.log(await SerialPort.list())

  const port = new SerialPort({ path: 'COM3', baudRate: 9600 }, function (err) {
    if (err) {
      return console.log('Error on opening: ', err.message)
    }
  });

  await sleep(5000);

  port.write(arg.toUpperCase());
}
main();
