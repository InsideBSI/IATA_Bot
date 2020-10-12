const { Command } = require("discord.js-commando");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "send",
      group: "chat",
      memberName: "send",
      description: "Bot repeat ...",
    });
  }

  run(message, args) {
    message.channel.send(args);
    message.delete();
  }
};
