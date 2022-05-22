const { Discord, Client, Collection } = require("discord.js");
require("dotenv").config()//npm i dotenv
const client = new Client({
    intents: 32767,
    
});
const db = require("quick.db")
const ms = require('ms')
const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

console.log(process.version)

module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handler")(client);
client.login("ODkxOTUxMDYxNTg4NDAyMjM2.G2kkjg.URD9HqCL9fwJpUJaTh2Zlb0MulfOQPiCHouSqQ") // توكن البوت ولو تبي تحطه فالقفل : clinet.login(process.env.token);
