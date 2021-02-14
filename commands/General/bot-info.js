const { MessageEmbed } = require("discord.js");
const os = require('os')

module.exports = {
    config: {
        name: "bot-info",
        aliases: ["info"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {




const embed = new MessageEmbed()
            .setThumbnail(bot.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('GOLD')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${bot.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${bot.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${bot.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(bot.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: bot.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: 'Node Version',
                    value: process.version,
                    inline: true
                },
                {
                    name: 'Memory Usage',
                    value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
                    inline: true
                },

            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))

        await message.channel.send(embed)

            }
        }
