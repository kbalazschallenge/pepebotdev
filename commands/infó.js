
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
   .setDescription("Bot Információ")
   .setColor("#97fc00")
   .addField("Bot neve:", bot.user.username)
   .addField("Bot készítője:", `Pepe#0545`)

   return message.channel.send(botembed);
}

module.exports.help = {
    name: "infó"
}