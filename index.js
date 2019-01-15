console.log("Program running");
const Discord = require("discord.js")
const client = new Discord.Client();
let discordready = false
const roleverified = "350067723864244224"
const channelgeneralid = "395769866675814425"
const channelgoodmusicid = "462947123168542734"
const channelmemesid = "500668845627932685"
const channeldarkjokesid = "455237509752815626"
const channelfeedbackid = "455654036272578561"
const channelcoolmomentsid = "403381367834148864"
const channelbotsid = "435182735191965696"
const channelvleksquotesid = "459187135447302155"

let channelgeneral
let channelgoodmusic
let channelmemes
let channeldarkjokes
let channelfeedback
let channelcoolmoments
let channelbots
let channelvleksquotes


function CheckIfModerator(Member) {
    return IsModerator = Member.hasPermission("MANAGE_GUILD",false,true,true);
}

function lockchannel(channel) {
    channel.overwritePermissions(channel.guild.id, {"VIEW_CHANNEL":false},"lockdown activation")
}

function unlockchannel(channel) {
    channel.overwritePermissions(channel.guild.id, {"VIEW_CHANNEL":true},"lockdown deactivation")
}

function lockdown(message) {
    lockchannel(channelgeneral);
    lockchannel(channelgoodmusic);
    lockchannel(channelmemes);
    lockchannel(channeldarkjokes);
    lockchannel(channelfeedback);
    lockchannel(channelcoolmoments);
    lockchannel(channelbots);
    lockchannel(channelvleksquotes);
    message.channel.send("Lockdown activated.");
}

function unlockdown(message) {
    unlockchannel(channelgeneral);
    unlockchannel(channelgoodmusic);
    unlockchannel(channelmemes);
    unlockchannel(channeldarkjokes);
    unlockchannel(channelfeedback);
    unlockchannel(channelcoolmoments);
    unlockchannel(channelbots);
    unlockchannel(channelvleksquotes);
    message.channel.send("Lockdown deactivated.");
}

client.on("message", message => {
    if (!discordready) {return}
    if (message.content === "lockdown") {
        var isModerator = CheckIfModerator(message.member)
        if (isModerator) {
            lockdown(message)
        }
    } else if (message.content === "unlockdown") {
        var isModerator = CheckIfModerator(message.member)
        if (isModerator) {
            unlockdown(message)
        }
    }

})


client.on("ready", () => {
    console.log("Fully loaded!")
    channelgeneral = client.channels.get(channelgeneral)
    channelgoodmusic = client.channels.get(channelgoodmusic)
    channelmemes = client.channels.get(channelmemes)
    channeldarkjokes = client.channels.get(channeldarkjokes)
    channelfeedback = client.channels.get(channelfeedback)
    channelcoolmoments = client.channels.get(channelcoolmoments)
    channelbots = client.channels.get(channelbots)
    channelvleksquotes = client.channels.get(channelvleksquotes)
    discordready = true
})

client.login(process.env.BOT_TOKEN);
