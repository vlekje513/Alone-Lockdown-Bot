console.log("Program running");
const Discord = require("discord.js")
const client = new Discord.Client();
let discordready = false
const roleverified = "350067723864244224"
const channelloungeid = "350070956863127567"
const channelbugreportsid = "368914333524033537"
const channelfeaturerequestsid = "368914405666062346"
const channelofftopicid = "350071216255795200"

let channellounge
let channelbugreports
let channelfeaturerequests
let channelofftopic


function CheckIfModerator(Member) {
    return IsModerator = Member.hasPermission("MANAGE_GUILD",false,true,true);
}

function lockchannel(channel) {
    channel.overwritePermissions(roleverified, {"VIEW_CHANNEL":false},"lockdown activation")
}

function unlockchannel(channel) {
    channel.overwritePermissions(roleverified, {"VIEW_CHANNEL":true},"lockdown deactivation")
}

function lockdown(message) {
    lockchannel(channellounge);
    lockchannel(channelbugreports);
    lockchannel(channelfeaturerequests);
    lockchannel(channelofftopic);
    message.channel.send("Lockdown activated.");
}

function unlockdown(message) {
    unlockchannel(channellounge);
    unlockchannel(channelbugreports);
    unlockchannel(channelfeaturerequests);
    unlockchannel(channelofftopic);
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
    channellounge = client.channels.get(channelloungeid)
    channelbugreports = client.channels.get(channelbugreportsid)
    channelfeaturerequests = client.channels.get(channelfeaturerequestsid)
    channelofftopic = client.channels.get(channelofftopicid)
    discordready = true
})

client.login(process.env.BOT_TOKEN);
