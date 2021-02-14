//ping command
module.exports = {
    config: {
        name: "ping",
        description: "to check the ping of the bot",
        aliases: []
    },
    run: async (bot, msg, args) => {
        
        msg.channel.send(`<:defi1:804797586438357003>Bot ping: **${bot.ws.ping}ms**`);

    }

} 


