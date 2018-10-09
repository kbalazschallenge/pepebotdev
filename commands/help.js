const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let info = new Discord.RichEmbed()
    .setTitle("Segítség")
    .setColor("#80f442")
    .addField("Parancsok:")
    .addField("!kick")
    .addField("!ban")
    .addField("!tempmute")
    .addField("!addrole <@felhasználó> <role>");

    return message.channel.send(info);
}

module.exports.help = {
    name: "help"
}