const { messageLink } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: "help", // Coloque o nome do comando
    description: "Embed de ajudas do bot.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, message) => {

    const embed = new Discord.EmbedBuilder()
    .setTitle(`Help`)
    .addFields({
      name: `Comando help`,
      value: `Esse bot é apenas uma base feita por Betta`
    })
    message.reply({ embeds: [embed] })

  }
};