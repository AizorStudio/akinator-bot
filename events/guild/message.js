// Copyright 2020 ManavvGarg <https://github.com/ManavvGarg/>
// 
// Licensed under the Apache License, Version 2.0(the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
             
            console.log(commandfile) //console.log the usage of commands
        
            commandfile.run(bot, message, args, ops)
        }


    } catch (e) {
        console.log(e);
    }


}