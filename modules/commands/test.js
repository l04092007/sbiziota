module.exports.config = {
    name: "disme",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Duyệt key disme",
    commandCategory: "Nhóm",
    usages: "",
    cooldowns: 3

};
module.exports.handleEvent = async ({ event, api, models }) => {
	//
}
module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID } = event;
    const axios = require('axios');
    if(args[0] == 'key') {
        if(senderID !== '100004253741257') return
        let keyy = global.utils.randomString(10)
        let data = await axios.get(`https://api.diencute1.repl.co/dismeproject/keyactive?key=${keyy}`)
        if(data.data.status == true) {
            return api.sendMessage(`Tạo key ${keyy} thành công!`, threadID, messageID);
        }
        if(data.data.status == false) {
            return api.sendMessage(data.data.msg, threadID, messageID);
        }
        else {
            api.sendMessage('Server bận!', threadID, messageID);
        }
    }
    if(args[0] == 'refresh' || args[0] == '-r') {
        let data = await axios.get(`https://api.diencute1.repl.co/dismeproject/keyactive?refresh=${args[1]}`)
        if(data.data.status == true) {
            return api.sendMessage(data.data.msg, threadID, messageID);
        }
        if(data.data.status == false) {
            return api.sendMessage(data.data.msg, threadID, messageID);
        }
        else {
            return api.sendMessage('Server bận!', threadID, messageID);
        }
    }
    else {
        if(senderID !== '100004253741257') return
        let data = await axios.get(encodeURI(`https://api.diencute1.repl.co/noti?text=${args.join(' ')}`));
        if(data.data.status == true);
        return api.sendMessage('Tạo thông báo thành công!', threadID, messageID);
    }
}
