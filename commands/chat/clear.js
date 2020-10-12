const { Command } = require("discord.js-commando");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "clear",
      group: "chat",
      memberName: "clear",
      description:
        "Add a number after the command to delete this number of messages",
    });
  }

  run(message) {
    const amount = message.content.split(" ")[1];

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("⚠️ You can't do that, sorry !");
    if (!amount)
      return message.reply("How many messages 💬 would you delete ?"); // Checks if the `amount` parameter is given
    if (isNaN(amount)) return message.reply("⚠️️ It is not a number!"); // Checks if the `amount` parameter is a number. If not, the command throws an error

    if (amount > 100) return message.reply("I can not do that! ⚠️ x > 100"); // Checks if the `amount` integer is bigger than 100
    if (amount < 1) return message.reply("I can not do that! ⚠️ x < 1"); // Checks if the `amount` integer is smaller than 1

    message.channel.messages.fetch({ limit: amount }).then((messages) => {
      message.channel.bulkDelete(messages);
    });
  }
};
