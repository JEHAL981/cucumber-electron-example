import cucumber from 'cucumber';
import { Given, When, Then } from "cucumber";
import { append } from 'hyperdom';
import vineHill from 'vinehill';
import { component } from 'browser-monkey';
import Client from '../../../app/music';
import server from '../../../app/server';



const MusicAppUrl = "http://localhost:5000";

    Given('I am using the music app', function () {
        vineHill({[MusicAppUrl]: server});
        append(document.body, new Client(MusicAppUrl));
        this.monkey = component(document.body)
    });

    When('I open the Music Genre Rock', function () {
        return this.monkey.click('Music Genre Rock');
    });

    Then('I should see MUSE displayed', function () {
        return this.monkey.shouldFind('h1', {text: 'MUSE'});
    });



