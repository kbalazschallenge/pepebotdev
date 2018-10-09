const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Kérlek rendes kérdéssel állj elém!");
    let replies = ["Igen.", "Nem.", "Nem tudom.", "Kérdezd meg később."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join("");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Kérdés:", question)
    .addField("Válaszom:", replies[result]);

    return message.channel.send(ballembed);

}

module.exports.help = {
    name: "kérdés"
}
