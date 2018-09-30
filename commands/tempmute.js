
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    //!tempmute @user 1s/m/h/d

    let tomute = (message.mentions.members.first() || message.guild.members.get(args[0]));

    if(!tomute) return message.reply("Nem találtam a felhasználót...");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Őt nem némíthatod!");
    let muterole = message.guild.roles.find(`name`, "muted");
    //START CREATING A ROLE
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#fc6400",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false

                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    //END OF CREATE ROLE

    let mutetime = args[1];
    if(!mutetime) return message.reply("Nem jelöltél meg időtartamot!");

    await(tomute.addRole(muterole.id));
    let tempmutee = new Discord.RichEmbed()
    .setDescription("~TempMute~")
    .setColor("#000000")
    .addField("Némítva lett:", `<@${tomute.id}>`)
    .addField("Eddig:", `${ms(ms(mutetime))}`)
 
    let muteChannel = message.guild.channels.find(`name`, "mutelog");
    //if(!muteChannel) return message.channel.send("Nem találom a mutelog szobát!");
    muteChannel.send(tempmutee)

    //return message.channel.send(tempmutee);
    // message.reply(`<@${tomute.id}> le lett némítva ennyi ideig: ${ms(ms(mutetime))}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        let ujrapofazhat = new Discord.RichEmbed()
        .setDescription("~TempMute~")
        .setColor("#000000")
        .addField("Újra beszélhet:", `${tomute.user}`)
        //message.channel.send(`${tomute.user} újra beszélhet!`)
        muteChannel.send(ujrapofazhat)
    }, ms(mutetime));
    //END OF MODULE
}

module.exports.help = {
    name: "tempmute"
}