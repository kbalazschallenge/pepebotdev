const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nem találom a felhasználót...");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ehhez nincs jogod!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Őt nem rúghatod ki!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f2913d")
    .addField("Kidobott felhasználó:", `${kUser} ID: ${kUser.id}`)
    .addField("Kidobva általa:", `<@${message.author.id}> ID: ${message.author.id}`)
    .addField("Indok:", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kicklog");
    if(!kickChannel) return message.channel.send("Nem találom a kicklog szobát!");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
   // console.log("Működik!");
}

module.exports.help = {
    name: "kick"
}