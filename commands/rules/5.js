const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules5",
      group: "rules",
      memberName: "rules5",
      description: "Part 5 of the Rules",
    });
  }

  run(message, args) {
    message.channel.send({
      files: ["https://zupimages.net/up/20/38/5zlp.png"],
    });
    message.delete();
  }
};
