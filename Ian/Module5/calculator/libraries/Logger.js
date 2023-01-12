class Logger {

    constructor(referrer) {
         this.id=Math.floor((Math.random() * 100) + 1);
         this.referrer = referrer
    }
    
    log=(message) => {
        console.log(`[${this.referrer}:${this.id}]:${message}`)
    }
}

module.exports = Logger
