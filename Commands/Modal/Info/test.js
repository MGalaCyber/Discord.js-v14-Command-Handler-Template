//=====================================| Import the Module |=====================================\\
const { ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../../Structures/Settings/config.json");
const Emoji = require("../../../Structures/Settings/emojis.json");
const Embed = require("../../../Structures/Settings/embed.json");

//==========< FUNCTIONS >==========\\
const { errorCmdLogsModal } = require("../../../Structures/Functions/errorCmdLogs.js");

//==========< OTHERS >==========\\

//=====================================| Code |=====================================\\

module.exports = {
    name: "modal-test",
    category: "Info",

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(client, interaction) {
        try {
            const title = interaction.fields.getTextInputValue("modal-title");
            const description = interaction.fields.getTextInputValue("modal-description");
            interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setTitle(title)
                        .setDescription(description)
                ]
            });

        } catch (error) {
            errorCmdLogsModal(client, interaction, error);
            return interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setColor(Embed.Colors.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} Failed To Execute The Modal!`)
                        .setDescription("I can't execute the code. Please try again later.")
                ]
            });
        };
    }
};

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */