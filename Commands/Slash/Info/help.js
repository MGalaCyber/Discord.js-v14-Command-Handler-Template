//=====================================| Import the Module |=====================================\\
const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../../Structures/Settings/config.json");
const Emoji = require("../../../Structures/Settings/emojis.json");
const Embed = require("../../../Structures/Settings/embed.json");

//==========< FUNCTIONS >==========\\
const { errorCmdLogsInt } = require("../../../Structures/Functions/errorCmdLogs.js");

//==========< OTHERS >==========\\
const { readdirSync } = require("fs");

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
        .setName("help")
        .setDescription("Display all commands from this bot.")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .setDMPermission(false),

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(client, interaction) {
        try {
            const dirs = readdirSync(`${process.cwd()}/Commands/Slash`);
            const slashCommands = await client.application.commands.fetch();
            const embedMsg = new EmbedBuilder()
                .setColor(Embed.Colors.successcolor)
                .setTitle("Help Commands")
                .setDescription("Select an option to get the command list of. Only one option can be selected.")
                .addFields(
                    { name: "Total Commands Category", value: `\`\`\`yml\n${dirs.length}\`\`\``, inline: true },
                    { name: "Total Slash Commands", value: `\`\`\`yml\n${slashCommands.size}\`\`\``, inline: true }
                )

            let helpMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId("select-helpMenu")
                    .setMaxValues(1)
                    .setMinValues(1)
            );

            readdirSync(`${process.cwd()}/Commands/Slash`).forEach((command) => {
                helpMenu.components[0].addOptions({
                    label: `${command}`,
                    description: `Command list for ${command}`,
                    value: `${command}`
                });
            });

            interaction.reply({ embeds: [embedMsg], components: [helpMenu] });

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