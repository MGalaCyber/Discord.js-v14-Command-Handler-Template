//=====================================| Import the Module |=====================================\\
const { Client } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../Structures/Settings/config.json");

//==========< OTHERS >==========\\
const moment = require("moment");
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "error",
    once: true,

    /**
     * @param {Client} client
     */

    async execute(error, client) {
        if (Config.DEVELOPER.Settings.Enable_Error) {
            console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[ERROR]`)} ` + `${error}`.bgRed);
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