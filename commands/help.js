const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let info = new Discord.RichEmbed()
    .setTitle("Segítség")
    .setColor("#80f442")
    .addField("Parancsok:", `!kick - Megjelölt felhasználó kirúgása.\n!ban - Megjelölt fehasználó kitiltása.\n!tempmute - Megjelölt felhasználó némítása.\n!addrole - Megjelölt felhasználónak egy rang adása.`)

    return message.channel.send(info);
}

module.exports.help = {
    name: "help"
}
