const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ad",
      group: "chat",
      memberName: "ad",
      description: "Template for ads",
    });
  }

  run(message, args) {
    if (!args.length) {
      return message.channel.send("Please Give a Ad");
    }
    const embed = new MessageEmbed()
      .setTitle("ANNONCE:")
      .setColor("#a1b85d")
      .setDescription(args)
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed);
    message.delete();
  }
};
