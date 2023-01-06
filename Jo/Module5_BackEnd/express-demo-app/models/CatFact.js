class CatFact {

    constructor(id, fact, length)
    {
        this.fact = fact;
        this.id = id;
        this.length = length;
    }

}

const CatFactsCache = new Map();

module.exports = {CatFact, CatFactsCache};