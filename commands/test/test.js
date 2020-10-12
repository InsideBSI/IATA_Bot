const { Command } = require("discord.js-commando");

module.exports = class LeaveCommand extends Command {
	constructor(client) {
		super(client, {
			name: "test",
			aliases: ["test"],
			group: "test",
			memberName: "test",
			guildOnly: false,
			description: "Testing stuff",
		});
	}

	run(message) {
		message.author.send("Hello").then((messageRef) => {
			messageRef.react("🇹");
			const reactFilter = (reaction) => reaction.emoji.name === "🇹" || reaction.emoji.name === "🇷";
			const collector = messageRef.createReactionCollector(reactFilter);
			collector.on("collect", (r, u) => {
				if (u.bot) return 0;
				console.log(`Collected ${r.emoji.identifier}`);
			});
		});
		return;
	}
};
