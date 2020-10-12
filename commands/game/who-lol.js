const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "who-lol",
      group: "chat",
      memberName: "who-lol",
      description: "Who would play at LoL.",
    });
  }

  run(message) {
    const filter = (reaction) => reaction.emoji.name === "🎮";
    const collector = message.createReactionCollector(filter, { time: 1000 });
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("LEAGUE OF LEGENDS")
      .setColor("#a1b85d")
      .setThumbnail(
        "https://www.srboosting.com/images/menu/league-of-legends_logo.png"
      )
      .setDescription(
        "Réagis avec 🎮 pour si tu veux le/la rejoindre dans une game"
      )
      .setFooter("I.A.T.A.", "https://i.goopics.net/PZDm5.png");
    const answer = new MessageEmbed()
      .setAuthor(message.client.username, message.client.avatarURL())
      .setColor("#a1b85d")
      .setThumbnail("https://pbs.twimg.com/media/EO-wP_mWoAAEMwv.png")
      .setDescription("veut bien jouer avec toi...");
    message.delete();
    message.channel.send(embed).then(async (embedMessage) => {
      await embedMessage.react("🎮").then(() => {
        message
          .awaitReactions(filter, { time: 10000 })
          .then((collected) => message.channel.send(answer));
      });
    });
  }
};
