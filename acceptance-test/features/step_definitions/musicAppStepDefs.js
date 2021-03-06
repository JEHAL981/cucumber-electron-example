const cucumber = require('cucumber');
const { Given, When, Then} = require("cucumber");
const hyperdom = require('hyperdom');
const vineHill = require('vinehill');
const browserMonkey = require('browser-monkey');
const Client = require('../../../app/music');
const server = require('../../../app/server');



const MusicAppUrl = "http://localhost:5000";

    Given('I am using the music app', function () {
        vineHill({[MusicAppUrl]: server});
        hyperdom.append(document.body, new Client(MusicAppUrl));
        this.monkey = browserMonkey.component(document.body)
    });

    When('I open the Music Genre Rock', function () {
        return this.monkey.click('Music Genre Rock');
    });

    Then('I should see MUSE displayed', function () {
        return this.monkey.shouldFind('h1', {text: 'MUSE'});
    });