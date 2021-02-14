const pagination = require('discord.js-pagination');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    config: {
        name: "howto",
    },
    run: async (bot, message, args) => {
        const first = new MessageEmbed()
        .setTitle(`How do I play with Akinator?`)
        .setDescription(`Akinator's all-consuming passion is trying to guess characters by asking questions.\n

        To play with him, think of a character, real or fictional, keep it well in mind and then run the command \`aki akinator (person/object/animal)\`.\n
        
        Akinator will then proceed to ask you a series of questions that you'll have to answer as truthfully as possible. After this series of questions, he will tell you what you were thinking of.`)
        .setColor('GOLD')
        .setImage(`https://i.imgur.com/WsNXfAs.jpg`)
        .setFooter(`Akinator | How-to`)
        .setTimestamp()


        const second = new MessageEmbed()
        .setTitle(`What's Akinator's secret?`)
        .setDescription(`Akinator uses the program Limule published by [Elokence.com](https://elokence.com). The algorithm I use is an original creation. How I created it is my little secret.`)
        .setColor('GOLD')
        .setFooter(`Akinator | How-to`)
        .setTimestamp()

        const third = new MessageEmbed()
        .setTitle(`How can I add a character?`)
        .setColor('GOLD')
        .setDescription(`Characters that can be added to Akinator's database can only be public figures. The user is asked not to add people that don't belong to that category, in particular people they know personally, even if these people agree to it.`)
        .addField(`\u200b`, ` At the end of a game, once Akinator has guessed the character you were thinking of, you can modify the name of that character. You'll have to click on "Suggest a new name". You will then be asked to enter the new name, a very short description (a word or two) so that this character is not mistaken with another with the same name and an optional comment to explain why you wanted to modify the name of the character. Your suggestion will be implemented once accepted and validated by the moderator`)
        .setFooter(`Akinator | How-to`)
        .setTimestamp()

        const pages = [
            first,
            second,
            third
        ]
    
        const emojiList = ["⏪", "⏩"];
    
        const timeout = '150000';
    
        pagination(message, pages, emojiList, timeout)


    }
}