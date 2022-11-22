const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    console.log("Fulltime final score is " + this.score);
    return this;
  },
};


class BBall //class
{
    constructor(freeThrow, basket, threePointer)
    {
        this.score = freeThrow;
        this.score = basket;
        this.score = threePointer;
    }

const bullets = new Team('bullets')
bullets.basket().threePointer().basket().freeThrow().basket().halfTime();

const celtics = new Team('celtics')
celtics.basket().freeThrow().threePointer().basket().basket().basket().halfTime()    