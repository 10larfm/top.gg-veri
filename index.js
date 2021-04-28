const Discord = require('discord.js');
const client = new Discord.Client();
const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster('topggtoken', client)

ap.on('posted', () => { 
  console.log("Posted stats to top.gg")
})

client.on('ready', () => {
  console.log(`READY ${client.user.tag}`);
});


client.login('BOT TOKEN');