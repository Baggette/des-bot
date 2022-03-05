const { Client, Intents, Message } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const prefix = "des"

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('des is online')
    client.user.setPresence({ activities: [{ name: "Super Smash Flash" }], status: 'idle' });
});

client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().startsWith(prefix)){
        let liberal =[
            "yes",
            "no",
            "why would you ask this",
            "blehhhh :nauseated_face: ",
            "thats a dumb thing to ask",
            "don't ask me",
            "fuck off",
            "try again later <:troll:900546362712666193>",
            "uno reverse",
            "skill issue",
            "I am a extremely vocal leftist in high school",
            "I don't care",
            "you suck",
            "hello fellow citizen",
            "let's play super smash flash",
            "Mitochondria are the powerhouses of the cell",
            `I am currently in ${client.guilds.cache.size} servers`
        ]
        message.channel.send(`${liberal[Math.floor(Math.random() * liberal.length)]}`)
    }
});

client.login(process.env.TOKEN);
