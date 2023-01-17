

class Logger {
    constructor() {
      this.id = this.#getRandomInt(10000)
    }
    #getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    log = (id, message) => {
      console.log(`[Logger ObjectID:${id}]:${message}`)
    }
  }
  
  module.exports = Logger
  