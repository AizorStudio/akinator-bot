const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require('quick.db');
const { stripIndents } = require("common-tags");
const { PREFIX } = require('../../config');

module.exports = {
    config: {
        name: "help",
        aliases: ["h"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setAuthor(message.author.username, "https://play-lh.googleusercontent.com/rjX8LZCV-MaY3o927R59GkEwDOIRLGCXFphaOTeFFzNiYY6SQ4a-B_5t7eUPlGANrcw")
        .setTitle(`Akinator Help | Commands`)
        .setDescription(`Akinator is a computer game and mobile app by French company Elokence. During gameplay, it attempts to determine what fictional or real-life character, object, film, television show, or animal the player is thinking of by asking a series of questions (like the game Twenty Questions).\n\n\n<:defi1:804797586438357003> \`aki howto\` - Returns how to start the game and other information.\n\n<:defi1:804797586438357003> \`aki ping\` - Returns the ping of the bot.\n\n<:defi1:804797586438357003> \`aki info\` - Returns the information of the bot.\n\n<:defi1:804797586438357003> \`aki about\` - Returns the information of the Developer.\n\n<:defi1:804797586438357003> \`aki akinator [person, object, animal]\` - Starts the Akinator Game!\n\n<:defi1:804797586438357003> \`end\` - Ends the current akinator game.\n\n<:defi1:804797586438357003> \`aki invite [inv]\` - Returns the invite link of Akinator.\n\nYou'll understand the rest of the game as you go with it. Have fun! <:defi1:804797586438357003> `)
        .setThumbnail("https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png")
        .setImage(`https://i.imgur.com/WsNXfAs.jpg`)
        .setTimestamp()

        message.channel.send(embed)


    }
}
