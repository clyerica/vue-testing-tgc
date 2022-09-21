
const config = require('./config.js');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {

    if (!fs.existsSync(`${__dirname}/user.js`)) {
      console.log("You are not logged in, therefore results are not submitted.");
      console.log("To login, please run 'node setup.js' in the project directory");
      return;
    }
    const user = require('./user.js');
    const rootDir = this._globalConfig.rootDir;
    const chunks = rootDir.split(path.sep);
    const questionCode = chunks[chunks.length - 1];

    async function sendSubmission() {
      const endpoint = config.BASE_API_URL + `api/tutorials/${config.tutorialCode}/questions/${questionCode}/submissions`

      try {
        let response = await axios.post(endpoint, {
          'results': results.numFailedTests > 0 ? 'failed' : 'passed'
        }, {
          headers: {
            'Authorization': `Basic ${user.jwt}`
          }
        })
        if (response.data.message == "success") {
          console.log("Your attempt has been submitted. You can try again if you have gotten a better answer!");
        } else {
          console.log("There's a problem logging your submission. Please try again!");
        }
      } catch(e) {       
        console.log("There has been a problem submitting your results. Please re-login and try again");
        console.log("Error", e.statusText);
      }
      
    }
    sendSubmission();


    // console.log('Options: ', this._options);
    // console.log('Results:', results);
  }
}

module.exports = MyCustomReporter;