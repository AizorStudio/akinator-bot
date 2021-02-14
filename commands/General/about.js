const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "about",
        aliases: ["abt"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {



const embed = new MessageEmbed()
.setDescription(`Made with :hearts: by Abuser#2824. His socials: 
<:128:790227323890696242> [Instagram](https://instagram.com/stfuabuzar)
<:githubsocialsharelogomediapngico:790228122787381268> [GitHub](https://github.com/AbuzarFX).
<:yt:790228968674426902> [YouTube](https://youtube.com/c/SyedAbuzar).`)
.setThumbnail(`https://i.imgur.com/VyYGPA2.gif`)
.setColor("GOLD")

message.channel.send(embed)

    }
}
