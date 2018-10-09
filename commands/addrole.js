
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    
    //!addrole @valaki <role>
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Ehhez nincs jogod!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Nem találom a felhasználót!");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Jelöld meg a rangot!")
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Nem találtam meg a rangot!");

    if (rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));

    try{
        await rMember.send(`Gratulálunk! Megkaptad a következő rangot: ${gRole.name}`)
    }catch(e){
        message.channel.send(`Gratulálunk, <@${rMember.id}>! Megkaptad a következő rangot: ${gRole.name}`)
    }
}
    

module.exports.help = {
    name: "addrole"
}