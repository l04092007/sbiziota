module.exports.config = {
	name: "imgur",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "up ảnh lên imgur", 
	commandCategory: "Tiện ích",
	usages: "Reply hình ảnh, gif",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	const axios = require('axios');
	var linkUp = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkUp) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
	try {
		const res = await axios.get(`https://api.sadgirlluytink.repl.co/imgur?link=${encodeURIComponent(linkUp)}`)
		const link = res.data.uploaded.image
		return api.sendMessage(link, event.threadID, event.messageID);
	} catch(e) {
		return api.sendMessage(e, event.threadID, event.messageID);
	}
}
            
                        