//=====================================| Import the Module |=====================================\\
const { ChatInputCommandInteraction, Client, EmbedBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../../Structures/Settings/config.json");
const Emoji = require("../../../Structures/Settings/emojis.json");
const Embed = require("../../../Structures/Settings/embed.json");

//==========< FUNCTIONS >==========\\
const { errorCmdLogsButton } = require("../../../Structures/Functions/errorCmdLogs.js");

//==========< OTHERS >==========\\

//=====================================| Code |=====================================\\

module.exports = {
    name: "btn-modal",
    category: "Info",
    authorOnly: false,

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(client, interaction) {
        try {
            const testModal = new ModalBuilder()
                .setCustomId("modal-test")
                .setTitle("Simulate Modal")
                testModal.addComponents(
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId("modal-title")
                            .setLabel("Input modal title")
                            .setStyle(TextInputStyle.Short)
                            .setMinLength(2)
                            .setMaxLength(10)
                            .setPlaceholder("Write you text here...")
                            .setRequired(true)
                    ),
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId("modal-description")
                            .setLabel("Input modal description")
                            .setStyle(TextInputStyle.Paragraph)
                            .setMinLength(2)
                            .setPlaceholder("Write you text here...")
                            .setRequired(true)
                    ),
                );
            await interaction.showModal(testModal);

        } catch (error) {
            errorCmdLogsButton(client, interaction, error);
            return interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setColor(Embed.Colors.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} Failed To Execute The Button!`)
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