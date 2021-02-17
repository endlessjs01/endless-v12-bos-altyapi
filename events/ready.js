const Discord = require("discord.js");
const config = require('../endless.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Endless ❤`}, status: 'idle' })
};

