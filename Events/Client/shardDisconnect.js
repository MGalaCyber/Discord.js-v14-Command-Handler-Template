//=====================================| Import the Module |=====================================\\
const { Client } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../Structures/Settings/config.json");

//==========< OTHERS >==========\\
const moment = require("moment");
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "shardDisconnect",
    once: true,

    /**
     * @param {Client} client
     */

     async execute(event, id, client) {
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[SHARD ID DISCONNECT]`)} ` + `[${id}]`.cyan);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[SHARD EVENT DISCONNECT]`)} ` + `${event}`.yellow);
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