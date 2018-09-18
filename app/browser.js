const hyperdom = require('hyperdom');
const Client = require('./music');

hyperdom.append(document.body, new Client());
