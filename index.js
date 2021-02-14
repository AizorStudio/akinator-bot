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

const { Client, Collection, MessageEmbed } = require("discord.js")
const bot = new Client();
const { PREFIX, TOKEN } = require("./config")
const db = require("quick.db")
const DBL = require("dblapi.js");

//Defining Collections
bot.commands = new Collection();
bot.aliases = new Collection();

//Importing and setting collections for Command names and aliases
["commands", "aliases"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handler/${x}`)(bot));
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwNDc4OTI5MDEzM4NTg4NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEyNzk2MjEyfQ.tiKnJkYnuyY7r2T8Q7grtD_RiNfVSFWkrJzCx5I6msM', bot);
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
bot.on("message", async message => {
    
    //Prefix fetching for each guild to support multi guild changeable prefix
    let prefix;
    try {
        let fetch = await db.fetch(`prefix_${message.guild.id}`)
        if(fetch === null) {
            prefix = PREFIX
        }

        else {
            prefix = fetch
        }
    }
    catch(e) {
        console.log(e) //console logging any error
    };

    //On mentioning the botm it will display the message [My prefix : PREFIX for the paticular guild]
    try{
        if(message.mentions.has(bot.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
            const embed = new MessageEmbed()
            .setTitle("My config for this guild are: ")
            .setDescription(`My prefix in this server \`[${message.guild.name}]\` is : \`${prefix}\`\n\nUse ${prefix}help for more info.`)
            .setColor("GOLD")

            message.channel.send(embed)
        }
    }

    catch(e) {
        console.log(e)
    }

})

//Start the bot
bot.login(TOKEN)
