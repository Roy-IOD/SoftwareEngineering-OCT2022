class Logger {

  constructor (referer) {
    this.id = Math.random();
    this.referer = referer
  }

  log = (message) => {
    console.log(`[${this.referer}:${this.id}]:${message}`);
  }
}

module.exports = Logger