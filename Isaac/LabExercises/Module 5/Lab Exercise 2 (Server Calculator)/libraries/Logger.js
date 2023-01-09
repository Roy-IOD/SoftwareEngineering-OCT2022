class Logger {
      constructor() {
            this.id = Math.random()
      }
      log(message) {
            console.log(`[Calculator Log :${this.id}]:${message}`)
      }
}

module.exports = Logger