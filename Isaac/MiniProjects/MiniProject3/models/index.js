"use strict";
const Game = require("./Game");

async function init() {
  await Game.sync();
}
init();

module.exports = { Game };
