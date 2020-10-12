const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules8",
      group: "rules",
      memberName: "rules8",
      description: "Part 8 of the Rules",
    });
  }

  run(message, args) {
    const embed = new MessageEmbed()
      .setColor("#a1d85b")
      .setDescription(
        "Réagis avec <:iatabot:754681565384015965> pour accéder au rôle menu qui te permettras de t'attribuer ta classe"
      )
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed);
    message.delete();
  }
};
