console.log("Program running");
const Discord = require("discord.js")
const client = new Discord.Client();
let discordready = false
const roletest = "478908416044302338"
const channelgeneralid = "478601998644674578"

let channelgeneral


function CheckIfModerator(Member) {
    return IsModerator = Member.hasPermission("MANAGE_GUILD",false,true,true);
}

function lockchannel(channel) {
    channel.overwritePermissions(roletest, {"VIEW_CHANNEL":false},"lockdown activation")
}

function unlockchannel(channel) {
    channel.overwritePermissions(roletest, {"VIEW_CHANNEL":true},"lockdown deactivation")
}


function lockdown(message) {
    lockchannel(channelgeneral);



    message.channel.send("Lockdown activated.");
}

function unlockdown(message) {
    unlockchannel(channelgeneral);



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
    channelgeneral = client.channels.get(channelgeneralid)
    discordready = true
})

client.login(process.env.BOT_TOKEN);
