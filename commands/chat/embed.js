const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "embed",
      group: "chat",
      memberName: "embed",
      description: "Template pour envoyer un embed",
    });
  }

  run(message, args) {
    if (!args.length) {
      return message.channel.send("Please give text");
    }
    const embed = new MessageEmbed()
      .setColor("a1d85b")
      .setDescription(args)
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed);
    message.delete();
  }
};
