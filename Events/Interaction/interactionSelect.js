//=====================================| Import the Module |=====================================\\
const { Client, ChatInputCommandInteraction } = require("discord.js");

//===============< FUNCTIONS >===============\\
const { errorCmdLogsSelect } = require("../../Structures/Functions/errorCmdLogs.js");

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
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(interaction, client) {
        if (interaction.isStringSelectMenu()) {
            if (interaction.user.bot) return;
            const command = client.selectMenus.get(interaction.customId);
            if (!command) {
                interaction.reply({
                    ephemeral: true,
                    content: "Failed to execute select menus!"
                });
            };


            //===============< DEVELOPER ONLY >===============\\
            if (command.authorOnly && !interaction.user.id) {
                interaction.reply({
                    ephemeral: true,
                    content: "This action can only be used by Author!"
                });
            };

            //===============< EXECUTE CMD >===============\\
            try {
                command.execute(client, interaction);
            } catch (error) {
                errorCmdLogsSelect(client, interaction, error)
                console.log(`${color.bold.red(`[INTERACTION > SELECTION: ERROR]`)} ` + `${error}`.bgRed);
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