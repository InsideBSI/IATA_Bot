const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ticket",
      group: "ticket",
      memberName: "ticket",
      description: "Embed to gave tickets",
    });
  }

  run(message, args) {
    const embed = new MessageEmbed()
      .setTitle("TAKE A TICKET:")
      .setColor("#9299f3")
      .setDescription(
        "Cliques sur la réaction pour pouvoir rentrer en contact avec le staff..."
      )
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed).then(async (embedMessage) => {
      await embedMessage.react("🎫");
    });
    message.delete();
  }
};
