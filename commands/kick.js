const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!kUser);
    let embed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f2913d")
    .addField("Használat:", `< !kick @felhasználó <indok>\n`)
    .addField("Kellő jogosultság:", `< Ban Members\n`)
    .addField("Példa:", `!kick @felhasználó Rossz magaviselet!\n`);
    if(!kUser) return message.channel.send(embed);
    
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("> Ehhez nincs jogod!");
    if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("> Őt nem rúghatod ki!");

    let kickChannel = message.guild.channels.find("name", "moderatorlog");
    if(kickChannel);
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f2913d")
    .addField("Kidobott felhasználó:", `${kUser} ID: ${kUser.id}`)
    .addField("Kidobva általa:", `<@${message.author.id}> ID: ${message.author.id}`)
    .addField("Indok:", kReason);
    if(!kickChannel);
    let guildChannel = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f2913d")
    .addField("Hozd létre a következő szobát:", `moderatorlog\n\nTEXT CHANNEL`)
    if(!kickChannel) return message.channel.send(guildChannel)

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
   // console.log("Működik!");
}

module.exports.help = {
    name: "kick"
}