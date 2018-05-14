const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', (join) => {
  console.log('I am here to help you Just like ARCHER');
  client.user.setActivity(` ArcherBot | AB/Info`);
  client.user.setStatus('idle');
});
client.on('message', message => {
  if (message.content === 'AB/Info'){
    message.reply('join my support discord: https://discord.gg/TRbQe9n ,NOW HERE IS THE INFO: \n Owner: <@376501859680256021> \n Prefix: AB/  \n Developer:<@376501859680256021> \n Subscribe to my channel to help my developers out! https://www.youtube.com/channel/UCKAY3Tw-APxo0dvsf1hheCQ ');
  }
});








client.on('message', message => {
    if (message.content === 'AB/Email') {
        message.channel.send('Sorry but this is Premium Only!');
    }
});



client.on('message', message => {
    if (message.content === 'Pizzas') {
        message.channel.send('Odering Pizza Permission authorised from <@376501859680256021>');
    }
});

client.on('message', message => {
    if (message.content === 'Archer') {
        message.channel.send('Archers Info!                                                                                                                         My developer = True                                                                                                                                                  Has a discord = True                                                                                                                                   Is human = true                                                                                                                                                                                Is server mod/admin = True');
    }
});

client.on('message', message => {
    if (message.content === 'SG') {
        message.channel.send('Join my Support Guild https://discord.gg/TRbQe9n  ');
    }
});





client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", (message) => {
    if (message.content.startsWith("AB/kick")) {
  if (!message.member.roles.find("name", "Administrator")) 
                message.channel.send('You need the \`Administrator\` role to use this command.');
  else
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }  //ive coded this before hand
});
client.on("message", (message) => {
    if (message.content.startsWith("AB/ban")) {
  if (!message.member.roles.find("name", "Administrator")) 
                message.channel.send('You need the \`Administrator\` role to use this command.');
  else
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});


client.on('message', message => {
    if (message.content === 'ApplyForDev') {
        message.channel.send('Join My Support Guild here:   https://discord.gg/98XZny4    and go to #apply-for-dev to apply for dev!');
    } 
});








client.on('message', message => {
    if (message.content === 'AB/VoteYes') {
        message.channel.send('Thank You im sure my developer will be happy :wink:');
    }
});

client.on('message', message => {
    if (message.content === 'AB/VoteQuestion') {
        message.channel.send('The vote Question is Should <@376501859680256021> be Main Helper ???');
    }
});


client.on('message', message => {
    if (message.content === 'AB/VoteNo') {
        message.channel.send('Awwwww :( My developers isnt going to be happy at you...');
    }
});

client.on('message', message => {
    if (message.content === 'AB/VoteTime') {
        message.channel.send('You have 3 Minutes to Vote! Votes After the time will NOT count! ');
    }
});
client.on('message', message => {
    if (message.content === 'AB/Developer') {
        message.channel.send('I am developed by <@376501859680256021>');
    }
});
//lets get a kick command! 


//I am developed by <@376501859680256021>
client.on('message', message => {
    if (message.content === 'Food') {
        message.channel.send(':shallow_pan_of_food: ');
    }
});

client.on('message', message => {
    if (message.content === 'food') {
        message.channel.send(':shallow_pan_of_food: ');
    }
});

client.on('message', message => {
    if (message.content === 'Drink') {
        message.channel.send(':tropical_drink: ');
    }
});
client.on('message', message => {
    if (message.content === 'drink') {
        message.channel.send(':tropical_drink: ');
    }
});

client.on('message', message => {
    if (message.content === 'Food And Drink') {
        message.channel.send(':tropical_drink: :shallow_pan_of_food: ');
    }
});





client.on('message', message => {
    if (message.content === 'ChangeLogs') {
        message.channel.send('Changed today!: Prefix is now AB/');
    }
});
    

client.on('message', message => {
    if (message.content === 'Roblox') {
        message.channel.send('Roblox Roblox i play roblox!!!! (From Archergamer30#4201)');
    }
});

client.on('message', message => {
    if (message.content === 'ArcherBot Lang And Money') {
        message.channel.send('Current Language for ArcherBot is: English                                                                                                                          Money Type: Pound Sterling                                                                                                       BUY PREMIUM ONLY £54.99 or $75.90!!!')
    }
});
client.on('message', message => {
    if (message.content === 'AB/Ping') {
        message.channel.send('Pong                                                                                                                               :stopwatch: 76                                                                                                                                                      :heartbeat: 25 ');
    }
});
client.on('message', message => {
    if (message.content === 'AB/Ping') {
        message.channel.send('Pong                                                                                                                               :stopwatch: 76                                                                                                                                                      :heartbeat: 25 ');
    }
});


client.on('message', message => {
    if (message.content === 'AB/dev1') {
        message.channel.send(process.env.MADE_WITH);
    }
});
client.login(process.env.TOKEN);
