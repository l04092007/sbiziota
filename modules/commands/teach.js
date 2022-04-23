module.exports.config = {
    name: "teach",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nanika",
    description: "Dạy bot (dùng cho lệnh sim)",
    commandCategory: "Dạy - trò chuyện cùng sim",
    usages: "",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = ({ api, event, args }) => {
    const { threadID, messageID, senderID } = event;
    return api.sendMessage("Reply tin nhắn này nhập câu hỏi cho simsimi", threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            messageID: info.messageID,
            content: {
                id: senderID,
                ask: "",
                ans: ""
            }
        })
    }, messageID);
}
module.exports.handleReply = async({ api, event, Users, handleReply }) => {
    const axios = require("axios");
    const fs = require("fs");
    const moment = require("moment-timezone");
    var timeZ = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");
    const { threadID, messageID, senderID, body } = event;
    let by_name = (await Users.getData(senderID)).name;
    if (handleReply.content.id != senderID) return;
    const input = body.trim();
    const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        api.unsendMessage(handleReply.messageID);
        global.client.handleReply.push({
            step: step,
            name: this.config.name,
            messageID: info.messageID,
            content: content
        })
    }, messageID);
    const send = async(msg) => api.sendMessage(msg, threadID, messageID);

    let content = handleReply.content;
    switch (handleReply.step) {
        case 1:
            content.ask = input;
            sendC("Reply tin nhắn này trả lời câu hỏi vừa xong", 2, content);
            break;

        case 2:
        const { join } = require("path");
        const dir = join(__dirname ,'simsimi');
    const pathData = join(dir,'TrainedData.json');
        
        const pathCredit = join(dir, 'TrainedCre.json');
        if(!fs.existsSync(pathCredit)){
          fs.writeFileSync(pathCredit, '[]');
        }
            content.ans = input;
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
            api.unsendMessage(handleReply.messageID);
            let c = content;
            let b4 = JSON.parse(fs.readFileSync(pathData));
            let creData = JSON.parse(fs.readFileSync(pathCredit));
                creData.push({
                  "Tên người tạo": by_name,
                  "ID người tạo": senderID,
                  "Nội dung câu hỏi": c.ask.toLocaleLowerCase(),
                  "Nội dung câu trả lời": c.ans,
                  "Thời gian": timeZ
                })
            fs.writeFileSync(pathCredit, JSON.stringify(creData, null,4))
            b4[c.ask.toLocaleLowerCase()] = c.ans.toLocaleLowerCase();
            let data = JSON.stringify(b4, null, 4)
            fs.writeFileSync(pathData, data);
          
            send(`Dạy sim thành công, previews:\n\nNội dung: ${c.ask.toLocaleLowerCase()} -> ${c.ans}\nNgười dạy: ${by_name}\nThời gian: ${timeZ}`);
            break;
        default:
            break;
    }
}