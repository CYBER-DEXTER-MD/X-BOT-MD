const { Sparky , isPublic } = require("../lib/plugins.js");

/*Sparky({name: "status_sender",fromMe: true,desc: "Restart the bot",category: "sudo",},async ({m,args,client}) => {})*/

Sparky({
    on: "text"
},
    async({
        m, client, args
    }) => {
        if (m.isGroup || !m.quoted) return;
        let text = ["oni", "Send", "one", "dhan", "dapan", "දපන්", "දහන්", "ewana", "එවන්න", "ewanako", "එවන්නකො", "දපන්", "dpn", "ඔනි", "ඔනේ", "දන්න", "දන්නකො", "දපිය", "dexter", "හුත්තො"];
        
        for (const any of text) {
            if (args.toLowerCase().startsWith(any)) {
                // Forward the quoted message
                await m.forward(m.jid, m.quoted.message);

                // Send the additional custom message " *DEXTER PROGRAMER* "
                await client.sendMessage(m.jid, { text: " 💀 *ʀᴀᴠɪ ꜱᴛᴀᴛᴜꜱ* 💀 " });  
                
                return; // Exit after sending the messages
            }
        }
    });