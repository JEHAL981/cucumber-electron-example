const reporter = require('cucumber-html-reporter')
const {After, Before} = require('cucumber');

After("AfterFeatures", function() {
    const options = {
        theme: 'bootstrap',
        jsonFile: './cucumber_report.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
    };
 
    reporter.generate(options);
  });