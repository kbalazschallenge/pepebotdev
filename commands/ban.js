const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Őt nem rúghatod ki!");

    if (!message.member.hasPermission("BAN_MEMBERS"));
    let noperm = new Discord.RichEmbed()
    .setDescription("~HIBA~")
    .setColor("#ff0000")
    .addField("Ehhez nincs jogosultságod!", `Kellő jogosultság: BAN_MEMBERS`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(noperm);

    if(!bUser);
    let embed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f2913d")
    .addField("Használat:", `< !kick @felhasználó <indok>\n`)
    .addField("Kellő jogosultság:", `< Ban Members\n`)
    .addField("Példa:", `!kick @felhasználó Rossz magaviselet!\n`);
    if(!bUser) return message.channel.send(embed);

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
