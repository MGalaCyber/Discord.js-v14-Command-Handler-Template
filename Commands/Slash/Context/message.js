//=====================================| Import the Module |=====================================\\
const { ContextMenuCommandBuilder, ContextMenuCommandInteraction, ApplicationCommandType, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../../Structures/Settings/config.json");
const Emoji = require("../../../Structures/Settings/emojis.json");
const Embed = require("../../../Structures/Settings/embed.json");

//==========< FUNCTIONS >==========\\
const { errorCmdLogsContext } = require("../../../Structures/Functions/errorCmdLogs.js");

//==========< OTHERS >==========\\

//=====================================| Code |=====================================\\

module.exports = {
    category: "Context",
    cooldown: 15,
    devOnly: false,
    guildOnly: false,
    voiceOnly: false,
    nsfwOnly: false,
    toggleOffCmd: false,
    maintenanceCmd: false,

    data: new ContextMenuCommandBuilder()
        .setName("Copy")
        .setType(ApplicationCommandType.Message)
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .setDMPermission(false),

    /**
     * @param {ContextMenuCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(client, interaction) {
        try {
            const message = interaction.targetMessage;
            interaction.reply({
                ephemeral: true,
                content: `I copied text: \`${message}\``
            });

        } catch (error) {
            errorCmdLogsContext(client, interaction, error);
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