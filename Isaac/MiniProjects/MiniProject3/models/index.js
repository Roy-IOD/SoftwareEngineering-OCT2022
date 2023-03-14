"use strict";
const Game = require("./Game");
const Team = require("./Team");
const Standing = require("./Standing");

async function init() {
  await Team.sync();
  await Game.sync();
  await Standing.sync();
}
init();

module.exports = { Game, Team, Standing };
