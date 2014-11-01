// conf.js

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['ZoomInSpec.js'],
    allScriptsTimeout: 5000,
    getPageTimeout: 5000,
    chromeOnly: true
   
}
