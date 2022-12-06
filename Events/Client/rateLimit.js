//=====================================| Import the Module |=====================================\\
const { Client, RateLimitError } = require("discord.js");

//==========< SETTINGS >==========\\
const Config = require("../../Structures/Settings/config.json");

//==========< OTHERS >==========\\
const moment = require("moment");
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "rateLimit",
    once: true,

    /**
     * 
     * @param {import("discord.js").RateLimitData} rateLimitData 
     * @param {RateLimitError} rateLimitError 
     * @param {Client} client 
     */

     async execute(rateLimitData, rateLimitError, client) {
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT DATA]`)} ` + `${rateLimitData.method} ${rateLimitData.path}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > GLOBAL]`)} ` + `${rateLimitError.global}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > HASH]`)} ` + `${rateLimitError.hash}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > LIMIT]`)} ` + `${rateLimitError.limit}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > MAJOR PARAMETER]`)} ` + `${rateLimitError.majorParameter}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > MESSAGE]`)} ` + `${rateLimitError.message}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > METHOD]`)} ` + `${rateLimitError.method}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > NAME]`)} ` + `${rateLimitError.name}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > ROUTE]`)} ` + `${rateLimitError.route}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > STACK]`)} ` + `${rateLimitError.stack}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > TIME TO RESET]`)} ` + `${rateLimitError.timeToReset}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
        console.log(`${color.bold.bgBlue(`[${moment().format("dddd - DD/MM/YYYY - hh:mm:ss", true)}]`)} ` + `${color.bold.red(`[RATE LIMIT ERROR > URL]`)} ` + `${rateLimitError.url}`.yellow);
        console.log("=======================================< LIMIT >=======================================".gray);
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