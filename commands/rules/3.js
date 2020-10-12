const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules3",
      group: "rules",
      memberName: "rules3",
      description: "Part 3 of the Rules",
    });
  }

  run(message, args) {
    message.channel.send({
      files: ["https://zupimages.net/up/20/38/dpv4.png"],
    });
    message.delete();
  }
};
