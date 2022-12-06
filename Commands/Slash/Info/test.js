//=====================================| Import the Module |=====================================\\
const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../../Structures/Settings/config.json");
const Emoji = require("../../../Structures/Settings/emojis.json");
const Embed = require("../../../Structures/Settings/embed.json");

//==========< FUNCTIONS >==========\\
const { errorCmdLogsInt } = require("../../../Structures/Functions/errorCmdLogs.js");

//==========< OTHERS >==========\\

//=====================================| Code |=====================================\\

module.exports = {
    category: "Info",
    cooldown: 15,
    devOnly: false,
    guildOnly: false,
    voiceOnly: false,
    nsfwOnly: false,
    toggleOffCmd: false,
    maintenanceCmd: false,

    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Simulate other interaction system.")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .setDMPermission(false),

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(client, interaction) {
        try {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Testing Other Interaction System")
                        .setDescription("Click button bellow to start simulate.")
                ],
                components: [
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId("btn-modal").setLabel("Modal").setStyle(ButtonStyle.Success),
                    )
                ]
            });

        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
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