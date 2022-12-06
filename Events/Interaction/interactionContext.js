//=====================================| Import the Module |=====================================\\
const { Client, ChatInputCommandInteraction } = require("discord.js");

//===============< FUNCTIONS >===============\\
const { errorCmdLogsInt } = require("../../Structures/Functions/errorCmdLogs.js");
const { onCoolDownInt } = require("../../Structures/Functions/onCooldowns.js");

//===============< SETTINGS >===============\\
const Webhook = require("../../Structures/Settings/webhook.json");
const Config = require("../../Structures/Settings/config.json");
const Emoji = require("../../Structures/Settings/emojis.json");
const Embed = require("../../Structures/Settings/embed.json");

//===============< OTHERS >===============\\
const color = require("colors");

//=====================================| Code |=====================================\\
module.exports = {
    name: "interactionCreate",

    /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(interaction, client) {
        if (interaction.isContextMenuCommand()) {
            if (interaction.user.bot) return;
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command is outdated!"
                });
            };

            //===============< DEVELOPER ONLY >===============\\
            if (command.devOnly && !Config.DEVELOPER.OWNER.includes(interaction.user.id)) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command can only be used by Developer!"
                });
            };

            //===============< GUILD ONLY >===============\\
            if (command.guildOnly && !Config.SERVER_ID.OFFICIAL.includes(interaction.guild.id)) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command can only be used by Official Server!"
                });
            };

            //===============< VOICE ONLY >===============\\
            if (command.voiceOnly) {
                const GME = interaction.guild.members.cache.get(client.user.id);
                if (!interaction.member.voice.channelId) {
                    interaction.reply({
                        ephemeral: true,
                        content: "This command can only be used in voice channel, and you are not connected to an audio channel!"
                    });
                } else if (GME.voice.channelId !== interaction.member.voice.channelId) {
                    interaction.reply({
                        ephemeral: true,
                        content: "This command can only be used in voice channel, and you are not on the same audio channel as me!"
                    });
                };
            };

            //===============< NSFW ONLY >===============\\
            if (command.nsfwOnly && !interaction.channel.nsfw) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command can only be used in NSFW channel!"
                });
            };

            //===============< DISABLED CMD >===============\\
            if (command.toggleOffCmd && !Config.DEVELOPER.OWNER.includes(interaction.user.id)) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command has been disabled by developer!"
                });
            };

            //===============< MAINTENANCE CMD >===============\\
            if (command.maintenanceCmd && !Config.DEVELOPER.OWNER.includes(interaction.user.id)) {
                interaction.reply({
                    ephemeral: true,
                    content: "This command has been maintenance by developer!"
                });
            };

            //===============< COOLDOWN CMD >===============\\
            if (onCoolDownInt(interaction, command) && !Config.DEVELOPER.OWNER.includes(interaction.user.id)) {
                interaction.reply({
                    ephemeral: true,
                    content: `Please wait \`${onCoolDownInt(interaction, command).toFixed(1)}\` before using the \`${interaction.commandName}\` command again!`
                });
            };

            //===============< EXECUTE CMD >===============\\
            try {
                command.execute(client, interaction);
            } catch (error) {
                errorCmdLogsInt(client, interaction, error)
                console.log(`${color.bold.red(`[INTERACTION > CONTEXT: ERROR]`)} ` + `${error}`.bgRed);
            };
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