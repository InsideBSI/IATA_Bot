const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "suggest",
      group: "chat",
      memberName: "suggest",
      description: "Dis nous quelle est ta suggestion...",
    });
  }

  run(message, args) {
    if (!args.length) {
      return message.channel.send("Please Give the Suggestion");
    }
    const embed = new MessageEmbed()
      .setAuthor("SUGGESTION:" + message.author.tag, message.author.avatarURL())
      .setColor("#a1d85b")
      .setDescription(args)
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed).then(async (embedMessage) => {
      await embedMessage.react("754929006456995900");
      await embedMessage.react("754929006272446464");
    });
    message.delete();
  }
};
