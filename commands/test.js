const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let testchannel = message.guild.channels.find("name", "testchannel");
    if(!testchannel) guild.createChannel("testchannel", "text")
    if(!testchannel) message.channel.send("Megy! A DEVLA VIGYEN EL!")
    const emoji = message.guild.emojis.first();

}

module.exports.help = {
    name: "teszt"
}