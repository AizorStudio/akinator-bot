

const db = require('quick.db');
const { PREFIX } = require('../../config');
const games = new Map()

module.exports = async (bot, message) => {
    try {
        if (message.author.bot || message.channel.type === "dm") return;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }

        let args = message.content.slice(prefix.length).trim().split(/ +/g); //splitting and defining the arguments
        let cmd = args.shift().toLowerCase(); //command name defining

        if (!message.content.startsWith(prefix)) return;

        let ops = {
            games: games
        }


        var commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
         if (commandfile){
             
            
        
            commandfile.run(bot, message, args, ops)
        }


    } catch (e) {
        console.log(e);
    }


}
