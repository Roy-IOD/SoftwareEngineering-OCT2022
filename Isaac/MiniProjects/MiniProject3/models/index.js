"use strict";
const Game = require("./Game");
const Team = require("./Team");
const Standing = require("./Standing");

async function init() {
  await Game.sync();
  await Team.sync();
  await Standing.sync();
}
init();

module.exports = { Game, Team, Standing };
