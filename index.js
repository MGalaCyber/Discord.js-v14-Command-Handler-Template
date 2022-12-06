/******************************************************************************************| INFORMATION |******************************************************************************************
 * @INFO :
 * 1.0 Import the required modules.
    * 1.1 Validating script for the advertisement.                                                  //////////////////////////////////////////////////////////////////////////////////////////////
 * 2.0 Create the Discord bot Client.                                                               ////                                                                                      ////
 * 3.0 Create the commands for the bot.                                                             \\\\                                        @NOTICE                                       \\\\
 * 4.0 Create/Custom the events for the bot.                                                        ////    This source code is public, it is forbidden to sell and buy this handler code     ////
 * 5.0 Create the functions for the bot.                                                            \\\\       if you want to use this handler code, please give credit from the owner        \\\\
 * 6.0 Create/Custom the variables for the bot.                                                     ////    it is forbidden to change the contents of the code (especially the core code)     ////
 *                                                                                                  \\\\                  it is forbidden to delete the credit in the code!                   \\\\
 *                                                                                                  ////                                                                                      ////
 * @CREDITS : MGalaCyber Development                                                                //////////////////////////////////////////////////////////////////////////////////////////////
 * @VERSION : 1.0.0
 * @DISCORDJS_VERSION : 14.7.1
 * @GITHUB : MGalaCyber
**************************************************************************************| All Right Reserved! |**************************************************************************************/

//=====================================| Import the Module |=====================================\\
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const Config = require("./Structures/Settings/config.json");
const moment = require("moment");
const color = require("colors");
require("dotenv").config();

//=====================================| Code |=====================================\\

//======================< Function >======================\\
const { loadButtonCommands } = require("./Structures/Handlers/Loaders/loadButtons.js");
const { loadSelectMenus } = require("./Structures/Handlers/Loaders/loadSelects.js");
const { loadModalForms } = require("./Structures/Handlers/Loaders/loadModals.js");
const { loadCommands } = require("./Structures/Handlers/Loaders/loadCommands.js");
const { loadEvents } = require("./Structures/Handlers/Loaders/loadEvents.js");
const { antiCrash } = require("./Structures/Handlers/antiCrash.js");
const { server } = require("./Structures/Handlers/server.js");

//======================< Client >======================\\
const client = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User
    ],
    fetchAllMembers: true,
});

//======================< Collection >======================\\
client.slashCommands = new Collection();
client.buttonCommands = new Collection();
client.selectMenus = new Collection();
client.modalForms = new Collection();
client.cooldowns = new Collection();
client.events = new Collection();

if (Config.DEVELOPER.Settings.Enable_Database) {
    require("./Structures/Handlers/mongoDB.js");
};

//======================< Login >======================\\
client.login(process.env.TOKEN || Config.Application_Information.TOKEN).then(() => {
//==========< MAIN >==========\\
    loadEvents(client, color);
    loadCommands(client, color);
    loadModalForms(client, color);
    loadSelectMenus(client, color);
    loadButtonCommands(client, color);

//==========< OTHERS >==========\\
    antiCrash(client, color);
    server(client, color);
}).catch(err => {
    console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[INDEX ERROR]`)} ` + `${err}`.bgRed);
});

module.exports = client;

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