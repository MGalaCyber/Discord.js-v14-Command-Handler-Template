//=====================================| Import the Module |=====================================\\
const { ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../../Structures/Settings/config.json");
const Emoji = require("../../../Structures/Settings/emojis.json");
const Embed = require("../../../Structures/Settings/embed.json");

//==========< FUNCTIONS >==========\\
const { errorCmdLogsSelect } = require("../../../Structures/Functions/errorCmdLogs.js");

//==========< OTHERS >==========\\
const { readdirSync } = require("fs");

//=====================================| Code |=====================================\\

module.exports = {
    name: "select-helpMenu",
    category: "Info",
    authorOnly: true,

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(client, interaction) {
        try {
            const selection = interaction.values[0];
            const commands = readdirSync(`${process.cwd()}/Commands/Slash/${selection}`).filter(file => file.endsWith(".js")).join(" ").split(".js");
    
            await interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setColor(Embed.Colors.successcolor)
                        .setTitle(`Command list for ${selection}`)
                        .setDescription(`\`\`\`yml\n${commands}\`\`\``)
                        .addFields({
                            name: "Command Count",
                            value: `\`\`\`yml\n${commands.length - 1} Command(s)\`\`\``
                        })
                ]
            });

        } catch (error) {
            errorCmdLogsSelect(client, interaction, error);
            return interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setColor(Embed.Colors.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} Failed To Execute The Selection!`)
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