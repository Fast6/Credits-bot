const Discord = require('discord.js');
const client2-5 = new Discord.Client();

client2-5.on('ready', async() => {
var server = "509370079046270977"; // ايدي السررفر
var channel = "509708477854384138";//ايدي الروم
    setInterval(()=>{
    client2-5.guilds.get(server).channels.get(channel).send('- SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM ')
    },305);
})


client2-5.login(process.env.BOT_TOKEN2-5);
