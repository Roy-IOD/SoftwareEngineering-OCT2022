class Logger {

    constructor(referer) {
        this.id=Math.floor((Math.random() * 100) + 1);
        this.referer = referer;
    }

    log = (message) => {
        console.log(`[${this.referer}:${this.id}]:${message}`)
    }
}

module.exports = Logger