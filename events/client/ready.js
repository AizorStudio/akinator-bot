  
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

const { PREFIX } = require('../../config');
module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)

    var activities = [ `${bot.guilds.cache.size} servers`, `${bot.users.cache.size} users!` ], i = 0;

    setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)

  
  
    
};