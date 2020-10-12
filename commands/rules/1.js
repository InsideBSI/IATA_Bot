const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules1",
      group: "rules",
      memberName: "rules1",
      description: "Part 1 of the Rules",
    });
  }

  run(message, args) {
    message.channel.send({
      files: ["https://zupimages.net/up/20/38/fqbc.png"],
    });
    message.delete();
  }
};
