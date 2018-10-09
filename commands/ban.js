const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nem találom a felhasználót...");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ehhez nincs jogod!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Őt nem rúghatod ki!");

    if(!bUser);
    let banEmbed2 = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#f2913d")
    .addField("Használat:", `< !ban @felhasználó <indok>\n`)
    .addField("Kellő jogosultság:", `< Ban Members\n`)
    .addField("Példa:", `!ban @felhasználó Rossz magaviselet!\n`);
    if(!bUser) return message.channel.send(banEmbed2);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#660033")
    .addField("Kirúgott felhasználó:", `${bUser} ID: ${bUser.id}`)
    .addField("Kirúgva általa:", `<@${message.author.id}> ID: ${message.author.id}`)
    .addField("Indok:", bReason);

    let banChannel = message.guild.channels.find(`name`, "moderatorlog");
    if(!banChannel) return message.channel.send("Nem találom a moderatorlog szobát!");
    
    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}
