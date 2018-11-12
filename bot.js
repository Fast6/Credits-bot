const Discord = require('discord.js');
const client2345 = new Discord.Client();

client2345.on('ready', async() => {
var server = "509370079046270977"; // ايدي السررفر
var channel = "509708477854384138";//ايدي الروم
    setInterval(()=>{
    client2345.guilds.get(server).channels.get(channel).send('- SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM ')
    },305);
})


client2345.login(process.env.BOT_TOKEN2345);
