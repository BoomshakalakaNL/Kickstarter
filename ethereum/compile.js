const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // delete build folder and it's depricated contents

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath); //create build folder

for (let contract in output){
  var filename = contract.replace(':', '') + '.json';
  fs.outputJsonSync(
    path.resolve(buildPath, filename),
    output[contract]
  );
}
