const { spawn } = require("child_process");
const path = require('path');

let testName = process.argv[2];
let testPath = "";
if (!testName) {
  testName = path.basename(path.resolve());
  testPath =  `../${testName}`;
} else {
  testPath = `./${testName}`
}

const cmd = process.platform == 'win32' ? 'npm.cmd' : 'npm';

spawn(cmd, [`run`, `-s`, `test:unit`, `--prefix`,  testPath], {stdio:'inherit'})
  .on('exit', function (error) {

    if(!error){
      console.log('Success!');
    } 
    }
  );