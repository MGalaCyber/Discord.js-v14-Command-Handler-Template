//=====================================| Import the Module |=====================================\\
const { version, Client, ActivityType, PresenceUpdateStatus } = require("discord.js");

//==========< OTHERS >==========\\
const { author } = require("../../package.json");
const moment = require("moment");
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "ready",
    once: true,

    /**
     * @param {Client} client
     */

    async execute(client) {
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.green(`[READY]`)} ` + `Logging into Discord...`.yellow);
        console.table({
            "Name": client.user.tag,
            "Author": `${author}`,
            "Discord.js": `v${version}`,
            "Node.js": `${process.version}`,
            "Guilds": client.guilds.cache.size,
            "Users": client.users.cache.size,
            "Channels": client.channels.cache.size,
            "Slash Commands": client.slashCommands.size,
            "Button Commands": client.buttonCommands.size,
            "Modals Forms": client.modalForms.size,
            "Select Menus": client.selectMenus.size,
            "Events": client.events.size
        });
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.green(`[READY]`)} ` + `${client.user.tag} is online!`.yellow);
        
        //====================< Status & Activity >===================\\
        setInterval(async () => {
            const status = [
                `${client.guilds.cache.size} Servers`,
                `${client.users.cache.size} Users`,
            ];

            client.user.setActivity(status[Math.floor(Math.random() * status.length)], {
                type: ActivityType.Listening
            });

            client.user.setPresence({
                status: PresenceUpdateStatus.Online
            });
        }, 5000);
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