const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "King | Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('?')
    .then(() => msg.react('?'))
    .then(() =>msg.react('?'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`? |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو  `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('__**??Broadcast??**__') 
       .addField('**??Server**', message.guild.name)
       .addField('**??Sender**', message.author.username)
       .addField('**??Message**', args)
       .setTimestamp() 
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })
	
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : omar`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : omar ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-bc`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);