const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "funfact",
      group: "chat",
      memberName: "funfact",
      description: "Template pour racconter une fun fact :))",
    });
  }

  run(message, args) {
    if (!args.length) {
      return message.channel.send("Please Give a Fun Fact");
    }
    const embed = new MessageEmbed()
      .setAuthor(
        "FUN FACT: " + message.author.username,
        message.author.avatarURL()
      )
      .setColor("#00b4d8")
      .setDescription(args)
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    message.channel.send(embed).then(async (embedMessage) => {
      await embedMessage.react("763065794300477490");
    });
    message.delete();
  }
};
