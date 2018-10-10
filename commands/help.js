const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let info = new Discord.RichEmbed()
    .setTitle("Segítség")
    .setColor("#80f442")
    .addField("Adminisztrátori", `!kick - Megjelölt felhasználó kirúgása.\n!ban - Megjelölt fehasználó kitiltása.\n!tempmute - Megjelölt felhasználó némítása.\n!addrole - Megjelölt felhasználónak egy rang adása.`)
    .addFieeld("Fun", `!kérdés - Kérdés feltétele, minimum 3 szóból kell állnia.`)
    return message.channel.send(info);
}

module.exports.help = {
    name: "help"
}
