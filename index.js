const botconfig = require ("./botconfig.json");
const Discord = require ("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Nem találtam parancsokat.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Pepe's huge dick and his B1G MemeS", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    if(cmd == `${prefix}hello`){
        return message.channel.send("Szia!");
    }

    if (cmd == `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Információ")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot neve:", bot.user.username)

        return message.channel.send(botembed);
    }

    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Szerver Információ")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Szerver neve:", message.guild.name)
        .addField("Összes felhasználó:", message.guild.memberCount);

        return message.channel.send(serverembed);
    }

   // if(cmd === `${prefix}kick`){

        //!kick @valaki aksin for it

   //     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //    if(!kUser) return message.channel.send("Nem találom a felhasználót...");
    //    let kReason = args.join(" ").slice(22);
     //   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ehhez nincs jogod!");
    //    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Őt nem rúghatod ki!");

     //   let kickEmbed = new Discord.RichEmbed()
    //    .setDescription("~Kick~")
    //    .setColor("#f2913d")
    //    .addField("Kidobott felhasználó:", `${kUser} ID: ${kUser.id}`)
     //   .addField("Kidobva általa:", `<@${message.author.id}> ID: ${message.author.id}`)
     //   .addField("Indok:", kReason);
//
     //   let kick2 = new Discord.RichEmbed()
      //  .setDescription("~Kick~")
      //  .setColor("#f2913d")
      //  .addField("Csatorna létrehozása...", `\nmoderatorlog\n\n<TEXT CHANNEL>\n\nPróbáld újra!`);

     //   let kickChannel = message.guild.channels.find("name", "moderatorlog");
      //  if(!kickChannel) return message.channel.send(kick2);
      //  if(!kickChannel) guild.createChannel("moderatorlog", "text");

       // channel.message.send(kick2);
      //  message.guild.member(kUser).kick(kReason);
      //  kickChannel.send(kickEmbed);

       // return;
  //  }

    if(cmd === `${prefix}ban`){

        
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Nem találom a felhasználót...");
        let bReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ehhez nincs jogod!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Őt nem rúghatod ki!");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#660033")
        .addField("Kirúgott felhasználó:", `${bUser} ID: ${bUser.id}`)
        .addField("Kirúgva általa:", `<@${message.author.id}> ID: ${message.author.id}`)
        .addField("Indok:", bReason);

        let banChannel = message.guild.channels.find(`name`, "banlog");
        if(!banChannel) return message.channel.send("Nem találom a banlog szobát!");
        
        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed);


        return;
    }

    if(cmd === `${prefix}tempmute`){



    }

});

bot.login(botconfig.token);
