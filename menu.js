const Discord = require('discord.js')
const client = new Discord.Client();

client.login("gjfjf");

var prefix = (process.env.TOKEN);

client.on("message", (message) => {
	if (message.content === "yo") {
		message.channel.send("Salutation mon cher")
	}
	if message.content === prefix + "help"){
		message.channel.send("Bot en dev créé par `failed to load name` prefix E!")
	}


});
