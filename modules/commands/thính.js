module.exports.config = {
	name: "thính",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Ca Dao Việt Nam",
	commandCategory: "Tình yêu",
	usages: "thính",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get(`https://jrt-api.j-jrt-official.repl.co/love`);
const anh = await axios.get(`https://jrt-api.j-jrt-official.repl.co/nude`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);
var cadao = res.data.data
let callback = function () {
			 api.sendMessage({
				body: `${cadao}`,
				attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
			}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
			};
			request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}