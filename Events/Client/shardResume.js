//=====================================| Import the Module |=====================================\\
const { Client } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../Structures/Settings/config.json");

//==========< OTHERS >==========\\
const moment = require("moment");
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "shardResume",
    once: true,

    /**
     * @param {Client} client
     */

     async execute(id, replayedEvents, client) {
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.green(`[SHARD ID RESUME]`)} ` + `[${id}]`.cyan);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.green(`[SHARD EVENT RESUME]`)} ` + `[${replayedEvents}]`.cyan);
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