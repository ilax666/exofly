const Discord = require('discord.js')
const client = new Discord.Client();

client.login("Njg1NTI1ODg0MzYyNjg2NDg0.Xm3Kxw._pVzEekNZZ8mHX_DAw8xHA9A178");

var prefix = ("E!");

client.on("message", (message) => {
	if (message.content === "yo") {
		message.channel.send("Salutation mon cher")
	}
	if message.content === prefix + "help"){
		message.channel.send("Bot en dev créé par `failed to load name` prefix E!")
	}


});
