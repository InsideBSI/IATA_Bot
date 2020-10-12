const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules7",
      group: "rules",
      memberName: "rules7",
      description: "Part 7 of the Rules",
    });
  }

  run(message, args) {
    message.channel.send({
      files: ["https://zupimages.net/up/20/38/1loq.png"],
    });
    message.delete();
  }
};
