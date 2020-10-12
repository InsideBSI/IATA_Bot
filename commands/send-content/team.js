const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "team",
      group: "send-content",
      memberName: "team",
      description: "The IATA Server team",
    });
  }

  run(message, args) {
    const embed = new MessageEmbed()
      .setColor("#a1d85b")
      .setTitle("")
      .setDescription("")
      .addFields(
        {
          name: "FONDATEUR",
          value: "------------------------------",
        },
        {
          name: "⚪ Ikiae",
          value: "🔺...\n🔻*20 ans*",
        },
        { name: "\u200B", value: "\u200B" },
        {
          name: "CO-FONDATEURS",
          value: "------------------------------",
        },
        {
          name: "⚪ Maël C",
          value: "🔺4TAGa\n🔻*15 ans*",
          inline: true,
        },
        {
          name: "⚪ Lou L",
          value: "🔺11ème Steiner\n🔻*16 ans*",
          inline: true,
        },
        { name: "\u200B", value: "\u200B" },
        {
          name: "SURVEILLANTS",
          value: "------------------------------",
        },
        {
          name: "⚪ Victor B",
          value: "🔺4QTAB\n🔻*15 ans*",
          inline: true,
        },
        {
          name: "⚪ Matteo T",
          value: "🔺5QMT\n🔻*17 ans*",
          inline: true,
        },
        {
          name: "⚪ Camille H",
          value: "🔺3Taga\n🔻*16 ans*",
          inline: true,
        },
        {
          name: "⚪ Julien R",
          value: "🔺6Q IG A\n🔻*19 ans*",
          inline: true,
        },
        {
          name: "⚪ Sam C",
          value: "🔺4p IMP\n🔻*16ans*",
          inline: true,
        },
        {
          name: "⚪ Sam L",
          value: "🔺5 TQ INFO A\n🔻*16 ans*",
          inline: true,
        }
      )
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed);
    message.delete();
  }
};
