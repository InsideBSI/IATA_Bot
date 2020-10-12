const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules2",
      group: "rules",
      memberName: "rules2",
      description: "Part 2 of the Rules",
    });
  }

  run(message, args) {
    const embed = new MessageEmbed()
      .setColor("#a1d85b")
      .setTitle(
        "Avant de rejoindre le serveur, tu dois t'assurer d'avoir un pseudo approprié... "
      )
      .setDescription("Il doit respecter la forme bien précise ci-dessous")
      .addFields({
        name: "[Prénom]+[Nom] ou [Prénom]+[1ère lettre du nom]",
        value:
          "Si tu ne sais pas comment faire, cliques sur l'image ci-dessous...",
      })
      .setImage("https://zupimages.net/up/20/38/rwfw.png");
    message.channel.send(embed);
    message.delete();
  }
};
