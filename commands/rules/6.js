const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules6",
      group: "rules",
      memberName: "rules6",
      description: "Part 6 of the Rules",
    });
  }

  run(message, args) {
    const embed1 = new MessageEmbed()
      .setColor("#a1d85b")
      .setTitle("Tu as remarqué un élément perturbateur ... ?")
      .setDescription(
        "Tu es dérangé, contrarié par quelqu'un,... ? Je te conseille de te rendre dans le salon <#764638417585045504>..."
      );
    const embed2 = new MessageEmbed()
      .setColor("#a1d85b")
      .setTitle("Tu es un élément perturbateur x)... ?")
      .setDescription(
        "Alors, je vais t'expliquer ce qui t'attends,... Au **premier** dérapement mineur, tu recevras un avertissement dans le salon <#755828891536326758>. Au **deuxième**, tu seras muté durant une durée de 24 à X heures et au **troisième**, tu seras ban du serveur durant 48h. Si tu insistes encore, ça sera durant une semaine... Et les sanctions vont être augmentées à chaque fois. Pour ce qui est du PermaBan, on espère ne jamais devoir en arriver là... :))"
      );

    message.channel.send(embed1);
    message.channel.send(embed2);
    message.delete();
  }
};
