const hyperdom = require('hyperdom');
const httpism = require('httpism/browser');
const html = hyperdom.html;

module.exports = class MusicAppClient {
  constructor(serverUrl) {
    this.api = httpism.client(serverUrl)
  }

  render() {
    return this.rock ? this.renderRock() : this.renderMenu()
  }

  renderMenu(model) {
    return html('button', { onclick: () => this.fetchRock('MUSE') },
      'Music Genre Rock')
  }

  fetchRock(genre) {
    return this.api.get('/music/' + genre)
      .then(rockroll => { this.rock = rockroll.rock })
  }

  renderRock() {
    return html('h1', this.rock)
  }
};
