module.exports.config = {
    name: "askpubg",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Câu hỏi cho người chơi pubg",
    commandCategory: "Game",
    usages: "",
    cooldowns: 0
};
module.exports .run = async function ({
    args,
    api,
    event
}) {
      const axios = require('axios')
      const fs = require("fs-extra");
      const res = await axios.get(`https://ginxkin-api.herokuapp.com/api/pubg_quiz/random`);
      const linkGun = res.data.link
      const bodyy = res.data.body
      const imgthumnail = [];
      const getIMG = (await axios.get(`${linkGun}`, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync( __dirname + `/cache/${event.senderID}.png`, Buffer.from(getIMG, "utf-8"));
        imgthumnail.push(fs.createReadStream(__dirname + `/cache/${event.senderID}.png`));
        return api.sendMessage({
                attachment: imgthumnail,
                body: bodyy
            }, event.threadID, (error, info) => {
                global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        answer: res.data.answer
                    })
                },
            event.messageID);;
    }
module.exports.handleReply = async function ({
    args,
    event,
    api,
    handleReply
}) {
      const { answer, messageID } = handleReply
      const answerUser = (event.body).toUpperCase()
      if (answerUser != "A" && answerUser != "B" && answerUser != "C") return
      if ( answerUser == answer ) {
        api.unsendMessage(messageID)
        return api.sendMessage(`💯Chính xác, đáp án là: ${answer}`, event.threadID, event.messageID)
      }
      else 
        api.unsendMessage(messageID)
        return api.sendMessage(`❌Opps sai rồi, đáp án là: ${answer}`, event.threadID, event.messageID)
}