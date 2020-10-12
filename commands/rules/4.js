const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rules4",
      group: "rules",
      memberName: "rules4",
      description: "Part 4 of the Rules",
    });
  }

  run(message, args) {
    const embed = new MessageEmbed()
      .setColor("#a1d85b")
      .setTitle("")
      .setDescription(
        "<:no:754929006272446464> Pas d’**insulte** \n\n<:no:754929006272446464> Pas d’**irrespect** \n\n<:no:754929006272446464> Pas de **spam/flood** \n\n<:no:754929006272446464> Pas de **signe religieux** \n\n<:no:754929006272446464> Pas de **débat politique** \n\n<:no:754929006272446464> Pas de **publicité** \n\n<:no:754929006272446464> Pas de **provocation** quelconque \n\n<:no:754929006272446464> Pas de **cyberharcèlement** \n\n<:no:754929006272446464> Pas de **propos discriminants**, **racistes**, **homophobes** ou **sexistes** \n\n<:no:754929006272446464> Pas d’**abus de majuscules** ou d’**émojis** \n\n<:no:754929006272446464> Pas d’**invitation à un autre serveur Discord** \n\n<:no:754929006272446464> Pas de **troll** \n\n<:no:754929006272446464> Pas de **contenu illégal** (services, drogue, crack, torrents, etc.) \n\n<:no:754929006272446464> Pas de **contenu pornographique**/**sexuel** \n\n<:no:754929006272446464> Interdit de **dénigrer**, **se moquer**, **insulter les professeurs**, **éducateurs**, **direction**"
      );
    message.channel.send(embed);
    message.delete();
  }
};
